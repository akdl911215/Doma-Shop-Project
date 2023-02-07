import { MainBoardsBaseDto } from "./main.boards.base.dto";
import { BaseOutputDto } from "../../common/dtos/base.output.dto";
import { BasePaginationInputDto, BasePaginationOutputDto } from "../../common/dtos/base.pagination";
declare const MainBoardsListInput_base: import("@nestjs/common").Type<Pick<BasePaginationInputDto, "take" | "page">>;
export declare class MainBoardsListInput extends MainBoardsListInput_base {
}
export declare class MainBoardsListOutput extends BaseOutputDto<BasePaginationOutputDto<MainBoardsBaseDto>> {
}
export {};
