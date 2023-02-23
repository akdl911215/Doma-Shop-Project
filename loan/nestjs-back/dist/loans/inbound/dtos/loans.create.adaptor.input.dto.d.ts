import { LoansModel } from "../../domain/entity/loans.model";
declare const LoansCreateAdaptorInputDto_base: import("@nestjs/common").Type<Pick<LoansModel, "debtorId" | "debtor" | "creditorId" | "creditor" | "totalAmountLoan" | "loanRepaymentDate" | "interest">>;
export declare class LoansCreateAdaptorInputDto extends LoansCreateAdaptorInputDto_base {
}
export {};
