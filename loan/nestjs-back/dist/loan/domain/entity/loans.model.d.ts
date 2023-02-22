import { BaseCommonCoreDto } from "../../../common/dtos/base.common.core.dto";
export declare class LoansModel extends BaseCommonCoreDto {
    debtor: string;
    debtorId: string;
    creditor: string;
    creditorId: string;
    totalAmountLoan: number;
    loanRepaymentDate: string;
    interest: number;
}
