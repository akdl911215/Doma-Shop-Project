import { IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreditorsListAdaptorInputDto {
  @IsNumber()
  @ApiProperty({
    type: Number,
    required: true,
    default: 1,
  })
  public page!: number;

  // list row count
  @IsNumber()
  @ApiProperty({
    type: Number,
    required: true,
    default: 10,
  })
  public take!: number;
}
