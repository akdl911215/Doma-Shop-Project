import { PickType } from "@nestjs/swagger";
import { LoansModel } from "../../../domain/entity/loans.model";

export class LoansExistsLoanDebtorUniqueIdInterfaceInputDto extends PickType(
  LoansModel,
  ["debtorsId"] as const
) {}
