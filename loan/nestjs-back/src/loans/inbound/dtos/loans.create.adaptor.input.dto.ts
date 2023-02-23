import { PickType } from "@nestjs/swagger";
import { LoansModel } from "../../domain/entity/loans.model";

export class LoansCreateAdaptorInputDto extends PickType(LoansModel, [
  "debtorId",
  "debtor",
  "creditorId",
  "creditor",
  "totalAmountLoan",
  "loanRepaymentDate",
  "interest",
] as const) {}
