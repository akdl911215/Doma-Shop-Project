import { IsUUID } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class LoansCreditorInquiryAdaptorInputDto {
  @IsUUID()
  @ApiProperty({
    type: String,
    default: "",
  })
  public id!: string;

  @IsUUID()
  @ApiProperty({
    type: String,
    default: "",
  })
  public creditorUniqueId!: string;
}
