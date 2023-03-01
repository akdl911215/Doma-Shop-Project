import { IsUUID } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class LoansValidateRequiredLoanUniqueIdAdaptorInputDto {
  @IsUUID()
  @ApiProperty({
    type: String,
    default: "",
    required: true,
  })
  public id!: string;
}
