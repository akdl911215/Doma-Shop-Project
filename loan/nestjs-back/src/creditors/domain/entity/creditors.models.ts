import { IsNotEmpty, IsUUID } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { BaseCommonCoreDto } from "../../../_common/dtos/base.common.core.dto";

export class CreditorsModels extends BaseCommonCoreDto {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    default: "",
  })
  public creditorUniqueId: string;

  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    default: "",
  })
  public creditorsConfirmationId!: string;
}
