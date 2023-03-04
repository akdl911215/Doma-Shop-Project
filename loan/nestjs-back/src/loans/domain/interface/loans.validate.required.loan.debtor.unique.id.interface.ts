import { LoansValidateRequiredLoanDebtorUniqueIdInterfaceInputDto } from "../../inbound/dtos/interface/loans.validate.required.loan.debtor.unique.id.interface.input.dto";

export interface LoansValidateRequiredLoanDebtorUniqueIdInterface {
  readonly validateRequiredLoanDebtorUniqueId: (
    dto: LoansValidateRequiredLoanDebtorUniqueIdInterfaceInputDto
  ) => Promise<void>;
}
