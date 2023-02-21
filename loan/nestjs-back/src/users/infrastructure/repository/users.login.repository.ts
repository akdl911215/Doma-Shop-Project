import {
  BadRequestException,
  Dependencies,
  Inject,
  Injectable,
  InternalServerErrorException,
} from "@nestjs/common";
import { UsersLoginAdaptorInputDto } from "../../inbound/dtos/users.login.adaptor.input.dto";
import {
  NO_MATCH_PASSWORD,
  NO_MATCH_USER_ID,
} from "../../../common/constants/http/errors/400";
import { UsersLoginAdaptorOutputDto } from "../../outbound/dtos/users.login.adaptor.output.dto";
import { PrismaService } from "../../../common/infrastructures/prisma/prisma.service";
import { TokenService } from "../../../common/infrastructures/token/token.service";
import { UsersLoginAdaptor } from "../../domain/adaptor/users.login.adaptor";
import { AccessTokenPayloadType } from "../../../common/infrastructures/token/type/access.token.payload.type";
import { RefreshTokenPayloadType } from "../../../common/infrastructures/token/type/refresh.token.payload.type";
import { HashDecodedService } from "../bcrypt/hash.decoded.service";

@Injectable()
@Dependencies([PrismaService, HashDecodedService, TokenService])
export class UsersLoginRepository implements UsersLoginAdaptor {
  constructor(
    private readonly prisma: PrismaService,
    @Inject("HASH_DECODED") private readonly compare: HashDecodedService,
    @Inject("TOKEN_SERVICE") private readonly jwtToken: TokenService
  ) {}

  public async login({
    userId,
    password,
  }: UsersLoginAdaptorInputDto): Promise<UsersLoginAdaptorOutputDto> {
    const user = await this.prisma.users.findUnique({ where: { userId } });
    if (!user) throw new BadRequestException(NO_MATCH_USER_ID);

    const {
      response: { decoded },
    } = await this.compare.decoded({
      password,
      hashPassword: user?.password,
    });

    const comparePassword: boolean = decoded;
    if (!comparePassword) throw new BadRequestException(NO_MATCH_PASSWORD);

    const accessPayload: AccessTokenPayloadType = {
      id: user.id,
      userId: user.userId,
    };
    const refreshPayload: RefreshTokenPayloadType = {
      id: user.id,
      userId: user.userId,
      phone: user.phone,
    };

    const {
      response: { accessToken, refreshToken },
    } = await this.jwtToken.generateTokens(accessPayload, refreshPayload);

    try {
      await this.prisma.$transaction([
        this.prisma.users.update({
          where: { id: user.id },
          data: { refreshToken },
        }),
      ]);
      return {
        response: {
          ...user,
          accessToken,
          refreshToken,
        },
      };
    } catch (e) {
      if (e instanceof InternalServerErrorException) {
        throw new InternalServerErrorException(e);
      } else {
        throw new Error(`${e}`);
      }
    }
  }
}
