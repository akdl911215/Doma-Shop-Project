import { PickType } from "@nestjs/swagger";
import { LoansModel } from "../../../domain/entity/loans.model";

export class LoansCreateAdaptorInputDto extends PickType(LoansModel, [
  "debtorsId",
  "creditorsId",
  "totalAmountLoan",
  "loanRepaymentDate",
  "interest",
] as const) {}
