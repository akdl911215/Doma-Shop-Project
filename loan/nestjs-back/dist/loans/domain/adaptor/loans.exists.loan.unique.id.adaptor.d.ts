import { LoansExistsLoanUniqueIdAdaptorInputDto } from "../../inbound/dtos/loans.exists.loan.unique.id.adaptor.input.dto";
import { LoansExistsLoanUniqueIdAdaptorOutputDto } from "../../outbound/dtos/loans.exists.loan.unique.id.adaptor.output.dto";
export interface LoansExistsLoanUniqueIdAdaptor {
    readonly validateRequiredLoanUniqueId: (dto: LoansExistsLoanUniqueIdAdaptorInputDto) => Promise<LoansExistsLoanUniqueIdAdaptorOutputDto>;
}
