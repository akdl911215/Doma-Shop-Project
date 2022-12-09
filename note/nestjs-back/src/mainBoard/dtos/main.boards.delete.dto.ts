import { IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { BaseOutputDto } from "../../common/dtos/base.output.dto";

export class MainBoardsDeleteInput {
  @IsNumber()
  @ApiProperty({
    type: Number,
    required: true,
  })
  public id!: number;
}

export class MainBoardsDeleteOutput extends BaseOutputDto<{
  readonly delete: boolean;
}> {}
