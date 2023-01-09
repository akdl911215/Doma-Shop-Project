import {
  BadRequestException,
  Dependencies,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../../common/infrastructure/prisma/prisma.service';
import { UsersLoginAdaptorInputDto } from '../../inbound/dtos/users.login.adaptor.input.dto';
import { NOTFOUND_USER } from '../../../common/constants/http/errors/404';
import { HashDecodedService } from '../bcrypt/hash.decoded.service';
import { NO_MATCH_PASSWORD } from '../../../common/constants/http/errors/400';
import { AccessTokenPayloadType } from '../token/type/access.token.payload.type';
import { RefreshTokenPayloadType } from '../token/type/refresh.token.payload.type';
import { TokenService } from '../token/token.service';
import { UsersLoginAdaptorOutputDto } from '../../outbound/dtos/users.login.adaptor.output.dto';
import { UsersLoginAdaptor } from '../../domain/adapter/users.login.adaptor';

@Injectable()
@Dependencies([PrismaService])
export class UsersLoginRepository implements UsersLoginAdaptor {
  constructor(
    private readonly prisma: PrismaService,
    @Inject('HASH_DECODED') private readonly compare: HashDecodedService,
    @Inject('TOKEN_SERVICE') private readonly jwtToken: TokenService,
  ) {}

  public async login({
    investorId,
    password,
  }: UsersLoginAdaptorInputDto): Promise<UsersLoginAdaptorOutputDto> {
    const user = await this.prisma.users.findUnique({ where: { investorId } });
    if (!user) throw new NotFoundException(NOTFOUND_USER);

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
      investorId: user.investorId,
    };
    const refreshPayload: RefreshTokenPayloadType = {
      id: user.id,
      investorId: user.investorId,
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
