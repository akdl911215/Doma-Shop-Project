import { IsNotEmpty, IsUUID } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreditorsDeleteAdaptorInputDto {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    default: "",
    required: true,
  })
  public id!: string;
}
