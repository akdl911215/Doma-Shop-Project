import { Logger } from "@nestjs/common";
import { MainBoardsInterface } from "./interceptors/main.boards.interface";
import { MainBoardsDeleteInput, MainBoardsDeleteOutput } from "./dtos/main.boards.delete.dto";
import { UsersBaseDto } from "../users/dtos/users.base.dto";
import { MainBoardsListInput, MainBoardsListOutput } from "./dtos/main.boards.list.dto";
import { MainBoardsReadInput, MainBoardsReadOutput } from "./dtos/main.boards.read.dto";
import { MainBoardsRegisterInput, MainBoardsRegisterOutput } from "./dtos/main.boards.register.dto";
import { MainBoardsUpdateInput, MainBoardsUpdateOutput } from "./dtos/main.boards.update.dto";
import { PrismaService } from "../prisma.service";
export declare class MainBoardsService implements MainBoardsInterface {
    private readonly prisma;
    private readonly logger;
    constructor(prisma: PrismaService, logger: Logger);
    register(dto: {
        requestUser: MainBoardsRegisterInput;
        user: UsersBaseDto;
    }): Promise<MainBoardsRegisterOutput>;
    delete(dto: {
        requestBoardId: MainBoardsDeleteInput;
        user: UsersBaseDto;
    }): Promise<MainBoardsDeleteOutput>;
    list(dto: MainBoardsListInput): Promise<MainBoardsListOutput>;
    read(dto: MainBoardsReadInput): Promise<MainBoardsReadOutput>;
    update(dto: {
        requestBoard: MainBoardsUpdateInput;
        user: UsersBaseDto;
    }): Promise<MainBoardsUpdateOutput>;
}
