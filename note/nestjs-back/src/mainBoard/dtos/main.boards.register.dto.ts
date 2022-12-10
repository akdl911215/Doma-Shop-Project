import { IsNotEmpty, IsNumber, IsString } from "class-validator";
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
  userId!: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    default: "",
  })
  title!: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    default: "",
  })
  description!: string;
}

export class MainBoardsRegisterOutput extends BaseOutputDto<MainBoardsBaseDto> {}
