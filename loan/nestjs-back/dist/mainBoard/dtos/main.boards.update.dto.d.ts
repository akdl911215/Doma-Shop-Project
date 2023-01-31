import { MainBoardsBaseDto } from "./main.boards.base.dto";
import { BaseOutputDto } from "../../common/dtos/base.output.dto";
declare const MainBoardsUpdateInput_base: import("@nestjs/common").Type<Pick<MainBoardsBaseDto, "description" | "title">>;
export declare class MainBoardsUpdateInput extends MainBoardsUpdateInput_base {
    id: number;
}
export declare class MainBoardsUpdateOutput extends BaseOutputDto<MainBoardsBaseDto> {
}
export {};
