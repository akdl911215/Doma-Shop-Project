import { LoansModel } from "../../domain/entity/loans.model";
declare const LoansCreateAdaptorInputDto_base: import("@nestjs/common").Type<Pick<LoansModel, "debtorId" | "debtorUniqueId" | "creditorId" | "creditorUniqueId" | "totalAmountLoan" | "loanRepaymentDate" | "interest">>;
export declare class LoansCreateAdaptorInputDto extends LoansCreateAdaptorInputDto_base {
}
export {};
