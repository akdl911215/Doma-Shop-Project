import {
  MainBoardsRegisterInput,
  MainBoardsRegisterOutput,
} from "../dtos/main.boards.register.dto";
import { UsersBaseDto } from "../../users/domain/entity/users.base.dto";
import {
  MainBoardsDeleteInput,
  MainBoardsDeleteOutput,
} from "../dtos/main.boards.delete.dto";
import {
  MainBoardsReadInput,
  MainBoardsReadOutput,
} from "../dtos/main.boards.read.dto";
import {
  MainBoardsUpdateInput,
  MainBoardsUpdateOutput,
} from "../dtos/main.boards.update.dto";
import {
  MainBoardsListInput,
  MainBoardsListOutput,
} from "../dtos/main.boards.list.dto";

export interface MainBoardsInterface {
  readonly register: (dto: {
    requestUser: MainBoardsRegisterInput;
    user: UsersBaseDto;
  }) => Promise<MainBoardsRegisterOutput>;

  readonly delete: (dto: {
    requestBoardId: MainBoardsDeleteInput;
    user: UsersBaseDto;
  }) => Promise<MainBoardsDeleteOutput>;

  readonly read: (dto: MainBoardsReadInput) => Promise<MainBoardsReadOutput>;

  readonly update: (dto: {
    requestBoard: MainBoardsUpdateInput;
    user: UsersBaseDto;
  }) => Promise<MainBoardsUpdateOutput>;

  readonly list: (dto: MainBoardsListInput) => Promise<MainBoardsListOutput>;
}
