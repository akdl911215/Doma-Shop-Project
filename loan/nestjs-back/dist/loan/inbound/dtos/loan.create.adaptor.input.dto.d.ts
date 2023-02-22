import { LoansModel } from "../../domain/entity/loans.model";
declare const LoanCreateAdaptorInputDto_base: import("@nestjs/common").Type<Pick<LoansModel, "debtorId" | "creditorId" | "totalAmountLoan">>;
export declare class LoanCreateAdaptorInputDto extends LoanCreateAdaptorInputDto_base {
}
export {};
