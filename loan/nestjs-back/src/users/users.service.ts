import {
  BadRequestException,
  ConflictException,
  Inject,
  Injectable,
  Logger,
  NotFoundException,
} from "@nestjs/common";
import { UsersInterface } from "./domain/adaptor/users.interface";
import { DeleteInputUser, DeleteOutputUser } from "./inbound/dtos/users.withdrawal.adaptor.input.dto";
import { FindInputUser, FindOutputUser } from "./inbound/dtos/users.profile.adaptor.input.dto";
import { LoginInputUser, LoginOutputUser } from "./inbound/dtos/users.login.adaptor.input.dto";
import {
  RegisterInputUser,
  RegisterOutputUser,
} from "./inbound/dtos/users.register.adaptor.input.dto";
import { UpdateInputUser, UpdateOutputUser } from "./inbound/dtos/users.update.adaptor.input.dto";
import { PrismaService } from "../common/infrastructures/prisma/prisma.service";
import {
  ALREADY_ACCOUNT_ID_EXISTS,
  ALREADY_PHONE_EXISTS,
  REFRESH_TOKEN_MODIFY_FAILED,
  UPDATE_FAILED,
} from "../common/constants/http/errors/409";
import { NOTFOUND_USER } from "../common/constants/http/errors/404";
import { UsersBaseDto } from "./domain/entity/users.base.dto";
import {
  NO_MATCH_PASSWORD,
  NO_MATCH_USER_ID,
} from "../common/constants/http/errors/400";
import { AccessTokenPayloadType } from "../common/infrastructures/token/type/access.token.payload.type";
import { RefreshPayloadType } from "../common/infrastructures/token/type/refresh.token.payload.type";
import { TokenService } from "../common/infrastructures/token/token.service";
import { BcriptDecodedInterface } from "../common/infrastructures/bcript/interfaces/bcript.decoded.interface";
import { BcriptIncodedInterface } from "../common/infrastructures/bcript/interfaces/bcript.incoded.interface";
import { Prisma } from "@prisma/client";
import { StrategyFindByIdInterface } from "./domain/adaptor/strategy.find.by.id.interface";
import {
  StrategyFindInputDto,
  StrategyFindOutputDto,
} from "./inbound/dtos/strategy.find.dto";

@Injectable()
export class UsersService implements UsersInterface, StrategyFindByIdInterface {
  constructor(
    private readonly prisma: PrismaService,
    private readonly logger: Logger,
    @Inject("IN_CODED") private readonly hash: BcriptIncodedInterface,
    @Inject("DE_CODED") private readonly compare: BcriptDecodedInterface,
    private readonly jwtToken: TokenService
  ) {
    prisma.$on<any>("query", (event: Prisma.QueryEvent) => {
      logger.warn("Query: " + event.query);
      logger.warn("Duration: " + event.duration + "ms");
    });
  }

  public async strategyFindById({
    id,
  }: StrategyFindInputDto): Promise<StrategyFindOutputDto> {
    const user = await this.prisma.users.findUnique({ where: { id } });
    if (!user) throw new NotFoundException(`${id}번 ${NOTFOUND_USER}`);

    return { response: user };
  }

  public async register({
    noteId,
    phone,
    name,
    password,
    address,
  }: RegisterInputUser): Promise<RegisterOutputUser> {
    const user = await this.prisma.users.findFirst({
      where: {
        OR: [
          {
            noteId,
          },
          {
            phone,
          },
        ],
      },
    });
    if (user?.noteId) throw new ConflictException(ALREADY_ACCOUNT_ID_EXISTS);
    if (user?.phone) throw new ConflictException(ALREADY_PHONE_EXISTS);

    try {
      return {
        response: await this.prisma.users.create({
          data: {
            noteId,
            password: await this.hash.incoded(password),
            phone,
            address,
            name,
          },
        }),
      };
    } catch (e) {
      throw new Error("USER REGISTER PRISMA CREATE FAILED " + e);
    }
  }

  public async login({
    noteId,
    password,
  }: LoginInputUser): Promise<LoginOutputUser> {
    const user = await this.prisma.users.findUnique({ where: { noteId } });
    if (!user) throw new NotFoundException(NOTFOUND_USER);

    const comparePassword: boolean = await this.compare.decoded(
      password,
      user?.password
    );
    if (!comparePassword)
      throw new BadRequestException(`${noteId} ${NO_MATCH_PASSWORD}`);

    const accessPayload: AccessTokenPayloadType = {
      id: user.id,
      noteId: user.noteId,
    };
    const refreshPayload: RefreshPayloadType = {
      id: user.id,
      noteId: user.noteId,
      phone: user.phone,
    };

    const {
      response: { accessToken, refreshToken },
    } = await this.jwtToken.generateTokens(accessPayload, refreshPayload);

    try {
      await this.prisma.users.update({
        where: { id: user.id },
        data: { refreshToken },
      });
      return {
        response: {
          ...user,
          accessToken,
          refreshToken,
        },
      };
    } catch (e) {
      throw new ConflictException(REFRESH_TOKEN_MODIFY_FAILED + ` ${e}`);
    }
  }

  public async findOn(dto: {
    requestUser: FindInputUser;
    user: UsersBaseDto;
  }): Promise<FindOutputUser> {
    const { id } = dto.requestUser;
    const { id: userId } = dto.user;
    const user = await this.prisma.users.findUnique({ where: { id } });
    if (!user) throw new NotFoundException(`${id}번 ${NOTFOUND_USER}`);

    if (id === userId) {
      return { response: user };
    } else {
      throw new BadRequestException(NO_MATCH_USER_ID);
    }
  }

  public async delete(dto: {
    requestUserId: DeleteInputUser;
    user: UsersBaseDto;
  }): Promise<DeleteOutputUser> {
    const user = await this.prisma.users.findUnique({
      where: { id: dto.requestUserId.id },
    });
    const { id } = user;
    if (!user) throw new NotFoundException(`${id}번 ${NOTFOUND_USER}`);

    if (dto.user.id === id) {
      try {
        await this.prisma.users.delete({ where: { id } });

        return { response: { delete: true } };
      } catch (e) {
        throw new Error("USER_DELETE_FAILED " + e);
      }
    } else {
      throw new BadRequestException(NO_MATCH_USER_ID);
    }
  }

  public async update(dto: {
    requestUser: UpdateInputUser;
    user: UsersBaseDto;
  }): Promise<UpdateOutputUser> {
    const dbUser = await this.prisma.users.findUnique({
      where: { id: dto.user.id },
    });
    if (!dbUser) throw new NotFoundException(NOTFOUND_USER);
    const {
      id: dbUserId,
      password: dbPassword,
      name: dbName,
      address: dbAddress,
      phone: dbPhone,
    } = dbUser;
    const {
      name: reqName,
      address: reqAddress,
      phone: reqPhone,
      password: reqPassword,
    } = dto.requestUser;

    const password = reqPassword === "" ? dbUser.password : reqPassword;
    const address = reqAddress === "" ? dbUser.address : reqAddress;
    const name = reqName === "" ? dbUser.name : reqName;
    const phone = reqPhone === "" ? dbUser.phone : reqPhone;

    if (dto.user.id === dbUser.id) {
      try {
        return {
          response: await this.prisma.users.update({
            where: { id: dbUserId },
            data: {
              password: await this.hash.incoded(password),
              address,
              name,
              phone,
            },
          }),
        };
      } catch (e) {
        throw new ConflictException(UPDATE_FAILED + ` ${e}`);
      }
    } else {
      throw new BadRequestException(NO_MATCH_USER_ID);
    }
  }
}
