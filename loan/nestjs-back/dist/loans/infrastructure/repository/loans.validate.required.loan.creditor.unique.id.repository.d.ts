import { LoansValidateRequiredLoanCreditorUniqueIdInterface } from "../../domain/interface/loans.validate.required.loan.creditor.unique.id.interface";
import { LoansValidateRequiredLoanCreditorUniqueIdInterfaceInputDto } from "../../inbound/dtos/interface/loans.validate.required.loan.creditor.unique.id.interface.input.dto";
export declare class LoansValidateRequiredLoanCreditorUniqueIdRepository implements LoansValidateRequiredLoanCreditorUniqueIdInterface {
    validateRequiredLoanCreditorUniqueId(dto: LoansValidateRequiredLoanCreditorUniqueIdInterfaceInputDto): Promise<void>;
}
