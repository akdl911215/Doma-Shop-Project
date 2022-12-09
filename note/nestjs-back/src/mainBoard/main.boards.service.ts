import { Injectable, Logger } from "@nestjs/common";
import { MainBoardsInterface } from "./interceptors/main.boards.interface";
import {
  MainBoardsDeleteInput,
  MainBoardsDeleteOutput,
} from "./dtos/main.boards.delete.dto";
import { UsersBaseDto } from "../users/dtos/users.base.dto";
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
import { PrismaService } from "../prisma.service";
import { Prisma } from "@prisma/client";

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

  register(dto: {
    requestUser: MainBoardsRegisterInput;
    user: UsersBaseDto;
  }): Promise<MainBoardsRegisterOutput> {
    // const { id: userId } = dto.user;
    // const { description, title } = dto.requestUser;
    // try {
    //   return {
    //     response: await this.prisma.board.create({
    //       data: { userId, title, description },
    //     }),
    //   };
    // } catch (e) {
    //   throw new Error('BOARD REGISTER PRISMA CREATE FAILED ' + e);
    // }

    return Promise.resolve(undefined);
  }

  delete(dto: {
    requestBoardId: MainBoardsDeleteInput;
    user: UsersBaseDto;
  }): Promise<MainBoardsDeleteOutput> {
    return Promise.resolve(undefined);
  }

  list(dto: MainBoardsListInput): Promise<MainBoardsListOutput> {
    return Promise.resolve(undefined);
  }

  read(dto: MainBoardsReadInput): Promise<MainBoardsReadOutput> {
    return Promise.resolve(undefined);
  }

  update(dto: {
    requestBoard: MainBoardsUpdateInput;
    user: UsersBaseDto;
  }): Promise<MainBoardsUpdateOutput> {
    return Promise.resolve(undefined);
  }
}
