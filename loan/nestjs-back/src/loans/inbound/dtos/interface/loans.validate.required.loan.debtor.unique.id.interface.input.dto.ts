import { PickType } from "@nestjs/swagger";
import { LoansModel } from "../../../domain/entity/loans.model";

export class LoansValidateRequiredLoanDebtorUniqueIdInterfaceInputDto extends PickType(
  LoansModel,
  ["debtorUniqueId"] as const
) {}
