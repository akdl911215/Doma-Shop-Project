import { LoansExistsLoanCreditorUniqueIdAdaptorInputDto } from "../../inbound/dtos/loans.exists.loan.creditor.unique.id.adaptor.input.dto";
import { LoansExistsLoanCreditorUniqueIdAdaptorOutputDto } from "../../outbound/dtos/loans.exists.loan.creditor.unique.id.adaptor.output.dto";
export interface LoansExistsLoanCreditorUniqueIdAdaptor {
    readonly validateRequiredLoanCreditorUniqueId: (dto: LoansExistsLoanCreditorUniqueIdAdaptorInputDto) => Promise<LoansExistsLoanCreditorUniqueIdAdaptorOutputDto>;
}
