import { IsNotEmpty, IsNumber } from "class-validator";
import { BaseOutputDto } from "../../common/dtos/base.output.dto";
import { ApiProperty } from "@nestjs/swagger";

export class DeleteInputUser {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    required: true,
  })
  id!: number;
}

export class DeleteOutputUser extends BaseOutputDto<{
  readonly delete: boolean;
}> {}
