import { MainBoardsInterface } from "./interceptors/main.boards.interface";
import { MainBoardsDeleteInput, MainBoardsDeleteOutput } from "./dtos/main.boards.delete.dto";
import { UsersModel } from "../users/domain/entity/users.model";
import { MainBoardsListInput, MainBoardsListOutput } from "./dtos/main.boards.list.dto";
import { MainBoardsReadInput, MainBoardsReadOutput } from "./dtos/main.boards.read.dto";
import { MainBoardsRegisterInput, MainBoardsRegisterOutput } from "./dtos/main.boards.register.dto";
import { MainBoardsUpdateInput, MainBoardsUpdateOutput } from "./dtos/main.boards.update.dto";
import { PrismaService } from "../common/infrastructures/prisma/prisma.service";
export declare class MainBoardsService implements MainBoardsInterface {
    private readonly prisma;
    constructor(prisma: PrismaService);
    register(dto: {
        requestUser: MainBoardsRegisterInput;
        user: UsersModel;
    }): Promise<MainBoardsRegisterOutput>;
    delete(dto: {
        requestBoardId: MainBoardsDeleteInput;
        user: UsersModel;
    }): Promise<MainBoardsDeleteOutput>;
    list(dto: MainBoardsListInput): Promise<MainBoardsListOutput>;
    read({ id, }: MainBoardsReadInput): Promise<MainBoardsReadOutput>;
    update(dto: {
        requestBoard: MainBoardsUpdateInput;
        user: UsersModel;
    }): Promise<MainBoardsUpdateOutput>;
}
