import { BaseCommonCoreDto } from "../../../_common/dtos/base.common.core.dto";
export declare class LoansModel extends BaseCommonCoreDto {
    debtorsId: string;
    creditorsId: string;
    totalAmountLoan: number;
    loanRepaymentDate: string;
    interest: number;
}
