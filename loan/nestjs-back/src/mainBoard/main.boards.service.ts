import {
  BadRequestException,
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
} from "@nestjs/common";
import { MainBoardsInterface } from "./interceptors/main.boards.interface";
import {
  MainBoardsDeleteInput,
  MainBoardsDeleteOutput,
} from "./dtos/main.boards.delete.dto";
import { UsersModel } from "../users/domain/entity/users.model";
import {
  MainBoardsListInput,
  MainBoardsListOutput,
} from "./dtos/main.boards.list.dto";
import {
  MainBoardsReadInput,
  MainBoardsReadOutput,
} from "./dtos/main.boards.read.dto";
import {
  MainBoardsRegisterInput,
  MainBoardsRegisterOutput,
} from "./dtos/main.boards.register.dto";
import {
  MainBoardsUpdateInput,
  MainBoardsUpdateOutput,
} from "./dtos/main.boards.update.dto";
import { PrismaService } from "../common/infrastructures/prisma/prisma.service";
import { Prisma } from "@prisma/client";
import {
  NOTFOUND_BOARD,
  NOTFOUND_BOARD_COMMENT,
  NOTFOUND_USER,
} from "../common/constants/http/errors/404";
import {
  NO_MATCH_USER_ID,
  NOT_EXIST_ID,
  NOT_EXIST_LIST,
} from "../common/constants/http/errors/400";
import { UPDATE_FAILED } from "../common/constants/http/errors/409";

@Injectable()
export class MainBoardsService implements MainBoardsInterface {
  constructor(
    private readonly prisma: PrismaService,
    private readonly logger: Logger
  ) {
    prisma.$on<any>("query", (event: Prisma.QueryEvent) => {
      logger.warn("Query: " + event.query);
      logger.warn("Duration: " + event.duration + "ms");
    });
  }

  public async register(dto: {
    requestUser: MainBoardsRegisterInput;
    user: UsersModel;
  }): Promise<MainBoardsRegisterOutput> {
    const { id: userId } = dto.user;
    const { description, title } = dto.requestUser;
    try {
      return {
        response: await this.prisma.mainBoard.create({
          data: { userId, title, description },
        }),
      };
    } catch (e) {
      throw new Error("BOARD REGISTER PRISMA CREATE FAILED " + e);
    }
  }

  public async delete(dto: {
    requestBoardId: MainBoardsDeleteInput;
    user: UsersModel;
  }): Promise<MainBoardsDeleteOutput> {
    const { id: searchUserId } = dto.user;
    const user = await this.prisma.users.findUnique({
      where: { id: searchUserId },
    });
    if (!user)
      throw new NotFoundException(`${searchUserId}번 ${NOTFOUND_USER}`);

    const { id: reqBoardId } = dto.requestBoardId;
    const board = await this.prisma.mainBoard.findFirst({
      where: {
        AND: [
          {
            userId: searchUserId,
          },
          {
            id: reqBoardId,
          },
        ],
      },
    });
    if (!board)
      throw new NotFoundException(`${reqBoardId}번 ${NOTFOUND_BOARD}`);
    const { id: mainBoardId, userId } = board;

    const comment = await this.prisma.mainBoardComment.findMany({
      where: { mainBoardId },
    });
    if (!comment) throw new NotFoundException(NOTFOUND_BOARD_COMMENT);

    if (userId === searchUserId) {
      try {
        let sql = '"commentId"=' + comment[0].id;
        for (let i = 1; i < comment.length; ++i) {
          sql += ' OR "commentId"=' + comment[i].id;
        }
        const dbSql = "DELETE FROM re_comment WHERE " + sql + ";";

        await this.prisma.$transaction([
          this.prisma.$queryRawUnsafe(`${dbSql}`),
          this.prisma.mainBoardComment.deleteMany({ where: { mainBoardId } }),
          this.prisma.mainBoard.delete({ where: { id: mainBoardId } }),
        ]);

        return { response: { delete: true } };
      } catch (e) {
        throw new BadRequestException(NOT_EXIST_ID + `: ${e}`);
      }
    } else {
      throw new BadRequestException(NO_MATCH_USER_ID);
    }
  }

  public async list(dto: MainBoardsListInput): Promise<MainBoardsListOutput> {
    const { page, take } = dto;
    const list = await this.prisma.mainBoard.count();
    if (!list) throw new BadRequestException(NOT_EXIST_LIST);

    const skip = (page - 1) * take;
    const resultPage = Math.round(list / take);
    const resultTotalPage = Math.round(resultPage - (skip + 1));

    try {
      return {
        response: {
          resultPage,
          resultTotalPage,
          currentList: await this.prisma.mainBoard.findMany({ skip, take }),
        },
      };
    } catch (e) {
      throw new BadRequestException(NOT_EXIST_LIST + `: ${e}`);
    }
  }

  public async read({
    id,
  }: MainBoardsReadInput): Promise<MainBoardsReadOutput> {
    const board = await this.prisma.mainBoard.findUnique({ where: { id } });
    if (!board) throw new NotFoundException(`${board.id}번 ${NOTFOUND_BOARD}`);

    return { response: board };
  }

  public async update(dto: {
    requestBoard: MainBoardsUpdateInput;
    user: UsersModel;
  }): Promise<MainBoardsUpdateOutput> {
    const { id: searchUserId } = dto.user;

    const user = await this.prisma.users.findUnique({
      where: { id: searchUserId },
    });
    if (!user)
      throw new NotFoundException(`${searchUserId}번 ${NOTFOUND_USER}`);

    const board = await this.prisma.mainBoard.findUnique({
      where: { id: dto.requestBoard.id },
    });
    if (!board) throw new NotFoundException(`${board.id}번 ${NOTFOUND_BOARD}`);
    const { id, userId } = board;

    if (userId === dto.user.id) {
      try {
        return {
          response: await this.prisma.mainBoard.update({
            where: { id },
            data: {
              title: dto.requestBoard.title,
              description: dto.requestBoard.description,
            },
          }),
        };
      } catch (e) {
        throw new ConflictException(UPDATE_FAILED + `: ${e}`);
      }
    } else {
      throw new BadRequestException(NO_MATCH_USER_ID);
    }
  }
}
