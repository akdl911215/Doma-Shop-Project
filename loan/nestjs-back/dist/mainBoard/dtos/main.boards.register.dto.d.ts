import { BaseOutputDto } from "../../common/dtos/base.output.dto";
import { MainBoardsBaseDto } from "./main.boards.base.dto";
export declare class MainBoardsRegisterInput {
    userId: number;
    title: string;
    description: string;
}
export declare class MainBoardsRegisterOutput extends BaseOutputDto<MainBoardsBaseDto> {
}
