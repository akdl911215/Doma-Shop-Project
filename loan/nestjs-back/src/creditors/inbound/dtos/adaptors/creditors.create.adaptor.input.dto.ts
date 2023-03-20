import { PickType } from "@nestjs/swagger";
import { CreditorsModels } from "../../../domain/entity/creditors.models";

export class CreditorsCreateAdaptorInputDto extends PickType(CreditorsModels, [
  "creditorsConfirmationId",
  "creditorsUniqueIds",
] as const) {}
