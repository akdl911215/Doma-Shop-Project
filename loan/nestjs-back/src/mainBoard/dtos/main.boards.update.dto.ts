import { ApiProperty, PickType } from "@nestjs/swagger";
import { MainBoardsBaseDto } from "./main.boards.base.dto";
import { IsNumber } from "class-validator";
import { BaseOutputDto } from "../../common/dtos/base.output.dto";

export class MainBoardsUpdateInput extends PickType(MainBoardsBaseDto, [
  "title",
  "description",
] as const) {
  @IsNumber()
  @ApiProperty({
    type: Number,
    required: true,
  })
  public id!: number;
}

export class MainBoardsUpdateOutput extends BaseOutputDto<MainBoardsBaseDto> {}
