import { LoansModel } from "../../domain/entity/loans.model";
declare const LoanCreateAdaptorInputDto_base: import("@nestjs/common").Type<Pick<LoansModel, "debtor" | "debtorId" | "creditor" | "creditorId" | "totalAmountLoan" | "loanRepaymentDate" | "interest">>;
export declare class LoanCreateAdaptorInputDto extends LoanCreateAdaptorInputDto_base {
}
export {};
