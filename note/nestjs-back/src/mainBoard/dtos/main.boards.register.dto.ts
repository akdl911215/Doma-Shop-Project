import { IsNotEmpty, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { BaseOutputDto } from "../../common/dtos/base.output.dto";
import { MainBoardsBaseDto } from "./main.boards.base.dto";

export class MainBoardsRegisterInput {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    required: true,
    default: 0,
  })
  public userId: number;
}

export class MainBoardsRegisterOutput extends BaseOutputDto<MainBoardsBaseDto> {}
