import {
  BadRequestException,
  ConflictException,
  Inject,
  Injectable,
  Logger,
  NotFoundException,
} from "@nestjs/common";
import { UsersInterface } from "./interfaces/users.interface";
import { DeleteInputUser, DeleteOutputUser } from "./dtos/users.delete.dto";
import { FindInputUser, FindOutputUser } from "./dtos/users.find.dto";
import { LoginInputUser, LoginOutputUser } from "./dtos/users.login.dto";
import {
  RegisterInputUser,
  RegisterOutputUser,
} from "./dtos/users.register.dto";
import { UpdateInputUser, UpdateOutputUser } from "./dtos/users.update.dto";
import { PrismaService } from "../prisma.service";
import {
  ALREADY_ACCOUNT_ID_EXISTS,
  ALREADY_PHONE_EXISTS,
  REFRESH_TOKEN_MODIFY_FAILED,
  UPDATE_FAILED,
} from "../common/constants/http/errors/409";
import { NOTFOUND_USER } from "../common/constants/http/errors/404";
import { UsersBaseDto } from "./dtos/users.base.dto";
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

@Injectable()
export class UsersService implements UsersInterface {
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

  public async register({
    noteId: userNoteId,
    phone: userPhone,
  }: RegisterInputUser): Promise<RegisterOutputUser> {
    const user = await this.prisma.users.findFirst({
      where: {
        OR: [
          {
            noteId: userNoteId,
          },
          {
            phone: userPhone,
          },
        ],
      },
    });
    if (user?.noteId) throw new ConflictException(ALREADY_ACCOUNT_ID_EXISTS);
    if (user?.phone) throw new ConflictException(ALREADY_PHONE_EXISTS);

    const { noteId, password, phone, address, name } = user;

    try {
      return {
        response: await this.prisma.users.create({
          data: {
            noteId,
            password,
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

  public async delete(dto: {
    requestUser: DeleteInputUser;
    user: UsersBaseDto;
  }): Promise<DeleteOutputUser> {
    const user = await this.prisma.users.findUnique({
      where: { id: dto.requestUser.id },
    });
    if (!user) throw new NotFoundException(NOTFOUND_USER);
    const { id } = user;

    if (dto.requestUser.id === id) {
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

  public async findOn({ id }: FindInputUser): Promise<FindOutputUser> {
    const user = await this.prisma.users.findUnique({ where: { id } });
    if (!user) throw new NotFoundException(`${id}번 ${NOTFOUND_USER}`);

    return { response: user };
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
    if (!comparePassword) throw new BadRequestException(NO_MATCH_PASSWORD);

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

  public async update(dto: {
    requestUser: UpdateInputUser;
    user: UsersBaseDto;
  }): Promise<UpdateOutputUser> {
    const user = await this.prisma.users.findUnique({
      where: { id: dto.user.id },
    });
    if (!user) throw new NotFoundException(NOTFOUND_USER);

    const {
      id: reqId,
      password: reqPassword,
      address: reqAddress,
      name: reqName,
      phone: reqPhone,
    } = dto.requestUser;
    const password = reqPassword === "" ? user.password : reqPassword;
    const address = reqAddress === "" ? user.address : reqAddress;
    const name = reqName === "" ? user.name : reqName;
    const phone = reqPhone === "" ? user.phone : reqPhone;

    if (reqId === user.id) {
      try {
        return {
          response: await this.prisma.users.update({
            where: { id: user.id },
            data: { password, address, name, phone },
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
