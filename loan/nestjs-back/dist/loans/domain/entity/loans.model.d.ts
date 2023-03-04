import { BaseCommonCoreDto } from "../../../_common/dtos/base.common.core.dto";
export declare class LoansModel extends BaseCommonCoreDto {
    debtorId: string;
    debtorUniqueId: string;
    creditorId: string;
    creditorUniqueId: string;
    totalAmountLoan: number;
    loanRepaymentDate: string;
    interest: number;
}
