import { MainBoardsRegisterInput, MainBoardsRegisterOutput } from "../dtos/main.boards.register.dto";
import { UsersModel } from "../../users/domain/entity/users.model";
import { MainBoardsDeleteInput, MainBoardsDeleteOutput } from "../dtos/main.boards.delete.dto";
import { MainBoardsReadInput, MainBoardsReadOutput } from "../dtos/main.boards.read.dto";
import { MainBoardsUpdateInput, MainBoardsUpdateOutput } from "../dtos/main.boards.update.dto";
import { MainBoardsListInput, MainBoardsListOutput } from "../dtos/main.boards.list.dto";
export interface MainBoardsInterface {
    readonly register: (dto: {
        requestUser: MainBoardsRegisterInput;
        user: UsersModel;
    }) => Promise<MainBoardsRegisterOutput>;
    readonly delete: (dto: {
        requestBoardId: MainBoardsDeleteInput;
        user: UsersModel;
    }) => Promise<MainBoardsDeleteOutput>;
    readonly read: (dto: MainBoardsReadInput) => Promise<MainBoardsReadOutput>;
    readonly update: (dto: {
        requestBoard: MainBoardsUpdateInput;
        user: UsersModel;
    }) => Promise<MainBoardsUpdateOutput>;
    readonly list: (dto: MainBoardsListInput) => Promise<MainBoardsListOutput>;
}
