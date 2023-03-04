import { LoansValidateRequiredLoanUniqueIdInterface } from "../../domain/interface/loans.validate.required.loan.unique.id.interface";
import { LoansValidateRequiredLoanUniqueIdInterfaceInputDto } from "../../inbound/dtos/interface/loans.validate.required.loan.unique.id.interface.input.dto";
export declare class LoansValidateRequiredLoanUniqueIdRepository implements LoansValidateRequiredLoanUniqueIdInterface {
    validateRequiredLoanUniqueId(dto: LoansValidateRequiredLoanUniqueIdInterfaceInputDto): Promise<void>;
}
