import { PickType } from "@nestjs/swagger";
import { MainBoardsBaseDto } from "./main.boards.base.dto";
import { BaseOutputDto } from "../../common/dtos/base.output.dto";
import {
  BasePaginationInputDto,
  BasePaginationOutputDto,
} from "../../common/dtos/base.pagination";

export class MainBoardsListInput extends PickType(BasePaginationInputDto, [
  "page",
  "take",
] as const) {}

export class MainBoardsListOutput extends BaseOutputDto<
  BasePaginationOutputDto<MainBoardsBaseDto>
> {}
