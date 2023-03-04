import { LoansExistsLoanDebtorUniqueIdAdaptorInputDto } from "../../inbound/dtos/loans.exists.loan.debtor.unique.id.adaptor.input.dto";
import { LoansExistsLoanDebtorUniqueIdAdaptorOutputDto } from "../../outbound/dtos/loans.exists.loan.debtor.unique.id.adaptor.output.dto";
export interface LoansExistsLoanDebtorUniqueIdAdaptor {
    readonly validateRequiredLoanDebtorUniqueId: (dto: LoansExistsLoanDebtorUniqueIdAdaptorInputDto) => Promise<LoansExistsLoanDebtorUniqueIdAdaptorOutputDto>;
}
