import { LoansValidateRequiredLoanUniqueIdAdaptorInputDto } from "../../inbound/dtos/loans.validate.required.loan.unique.id.adaptor.input.dto";
import { LoansValidateRequiredLoanUniqueIdAdaptorOutputDto } from "../../outbound/dtos/loans.validate.required.loan.unique.id.adaptor.output.dto";

export interface LoansValidateRequiredLoanUniqueIdAdaptor {
  readonly validateRequiredLoanUniqueId: (
    dto: LoansValidateRequiredLoanUniqueIdAdaptorInputDto
  ) => Promise<LoansValidateRequiredLoanUniqueIdAdaptorOutputDto>;
}
