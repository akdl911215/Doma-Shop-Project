import { BaseCommonCoreDto } from "../../../_common/dtos/base.common.core.dto";
import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class LoansModel extends BaseCommonCoreDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    default: "",
  })
  public debtorId!: string;

  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    default: "",
  })
  public debtorUniqueId!: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    default: "",
  })
  public creditorId!: string;

  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    default: "",
  })
  public creditorUniqueId!: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    default: 0,
  })
  public totalAmountLoan!: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    default: "",
  })
  public loanRepaymentDate!: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    default: 0,
  })
  public interest!: number;
}
