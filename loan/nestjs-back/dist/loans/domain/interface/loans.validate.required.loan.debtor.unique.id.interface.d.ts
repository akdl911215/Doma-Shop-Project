import { LoansValidateRequiredLoanDebtorUniqueIdInterfaceInputDto } from "../../inbound/dtos/interface/loans.validate.required.loan.debtor.unique.id.interface.input.dto";
import { LoansValidateRequiredLoanDebtorUniqueIdInterfaceOutputDto } from "../../outbound/dtos/interface/loans.validate.required.loan.debtor.unique.id.interface.output.dto";
export interface LoansValidateRequiredLoanDebtorUniqueIdInterface {
    readonly validateRequiredLoanDebtorUniqueId: (dto: LoansValidateRequiredLoanDebtorUniqueIdInterfaceInputDto) => Promise<LoansValidateRequiredLoanDebtorUniqueIdInterfaceOutputDto>;
}
