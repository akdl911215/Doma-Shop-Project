import { IsNumber } from "class-validator";
import { MainBoardsBaseDto } from "./main.boards.base.dto";
import { BaseOutputDto } from "../../common/dtos/base.output.dto";

export class MainBoardsReadInput {
  @IsNumber()
  public id!: number;
}

export class MainBoardsReadOutput extends BaseOutputDto<MainBoardsBaseDto> {}
