import { LoansValidateRequiredLoanUniqueIdInterfaceInputDto } from "../../inbound/dtos/interface/loans.validate.required.loan.unique.id.interface.input.dto";

export interface LoansValidateRequiredLoanUniqueIdInterface {
  readonly validateRequiredLoanUniqueId: (
    dto: LoansValidateRequiredLoanUniqueIdInterfaceInputDto
  ) => Promise<void>;
}
