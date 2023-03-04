import { LoansValidateRequiredLoanDebtorUniqueIdInterface } from "../../domain/interface/loans.validate.required.loan.debtor.unique.id.interface";
import { LoansValidateRequiredLoanDebtorUniqueIdInterfaceInputDto } from "../../inbound/dtos/interface/loans.validate.required.loan.debtor.unique.id.interface.input.dto";
export declare class LoansValidateRequiredLoanDebtorUniqueIdRepository implements LoansValidateRequiredLoanDebtorUniqueIdInterface {
    validateRequiredLoanDebtorUniqueId(dto: LoansValidateRequiredLoanDebtorUniqueIdInterfaceInputDto): Promise<void>;
}
