import { LoansValidateRequiredLoanCreditorUniqueIdAdaptorInputDto } from "../../inbound/dtos/loans.validate.required.loan.creditor.unique.id.adaptor.input.dto";
import { LoansValidateRequiredLoanCreditorUniqueIdAdaptorOutputDto } from "../../outbound/dtos/loans.validate.required.loan.creditor.unique.id.adaptor.output.dto";

export interface LoansValidateRequiredLoanCreditorUniqueIdAdaptor {
  readonly validateRequiredLoanCreditorUniqueId: (
    dto: LoansValidateRequiredLoanCreditorUniqueIdAdaptorInputDto
  ) => Promise<LoansValidateRequiredLoanCreditorUniqueIdAdaptorOutputDto>;
}
