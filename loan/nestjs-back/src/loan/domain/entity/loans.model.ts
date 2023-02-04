import { BaseCommonCoreDto } from "../../../common/dtos/base.common.core.dto";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class LoansModel extends BaseCommonCoreDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    default: "",
  })
  public debtor!: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    default: "",
  })
  public creditor!: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    default: 0,
  })
  public totalAmountLoan!: number;
}
