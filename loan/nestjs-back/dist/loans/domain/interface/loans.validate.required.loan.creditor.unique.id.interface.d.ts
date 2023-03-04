import { LoansValidateRequiredLoanCreditorUniqueIdInterfaceInputDto } from "../../inbound/dtos/interface/loans.validate.required.loan.creditor.unique.id.interface.input.dto";
import { LoansValidateRequiredLoanCreditorUniqueIdInterfaceOutputDto } from "../../outbound/dtos/interface/loans.validate.required.loan.creditor.unique.id.interface.output.dto";
export interface LoansValidateRequiredLoanCreditorUniqueIdInterface {
    readonly validateRequiredLoanCreditorUniqueId: (dto: LoansValidateRequiredLoanCreditorUniqueIdInterfaceInputDto) => Promise<LoansValidateRequiredLoanCreditorUniqueIdInterfaceOutputDto>;
}
