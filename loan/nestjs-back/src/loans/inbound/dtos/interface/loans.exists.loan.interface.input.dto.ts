import { PickType } from "@nestjs/swagger";
import { LoansModel } from "../../../domain/entity/loans.model";

export class LoansExistsLoanInterfaceInputDto extends PickType(LoansModel, [
  "id",
  "creditorUniqueId",
  "debtorUniqueId",
] as const) {}
