import { IsUUID } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class LoanInquiryAdaptorInputDto {
  @IsUUID()
  @ApiProperty({
    type: String,
    default: "",
  })
  public id!: string;
}
