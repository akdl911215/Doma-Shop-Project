import { LoansValidateRequiredLoanDebtorUniqueIdAdaptorInputDto } from "../../inbound/dtos/loans.validate.required.loan.debtor.unique.id.adaptor.input.dto";
import { LoansValidateRequiredLoanDebtorUniqueIdAdaptorOutputDto } from "../../outbound/dtos/loans.validate.required.loan.debtor.unique.id.adaptor.output.dto";

export interface LoansValidateRequiredLoanDebtorUniqueIdAdaptor {
  readonly validateRequiredLoanDebtorUniqueId: (
    dto: LoansValidateRequiredLoanDebtorUniqueIdAdaptorInputDto
  ) => Promise<LoansValidateRequiredLoanDebtorUniqueIdAdaptorOutputDto>;
}
