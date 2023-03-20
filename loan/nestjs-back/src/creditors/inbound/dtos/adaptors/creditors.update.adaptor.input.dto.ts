import { IsNotEmpty, IsUUID } from "class-validator";
import { ApiProperty, PickType } from "@nestjs/swagger";
import { CreditorsModels } from "../../../domain/entity/creditors.models";

export class CreditorsUpdateAdaptorInputDto extends PickType(CreditorsModels, [
  "creditorUniqueId",
]) {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    default: "",
    required: true,
  })
  public id!: string;
}
