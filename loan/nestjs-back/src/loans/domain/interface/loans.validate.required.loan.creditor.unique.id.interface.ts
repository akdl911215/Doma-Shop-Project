import { LoansValidateRequiredLoanCreditorUniqueIdInterfaceInputDto } from "../../inbound/dtos/interface/loans.validate.required.loan.creditor.unique.id.interface.input.dto";

export interface LoansValidateRequiredLoanCreditorUniqueIdInterface {
  readonly validateRequiredLoanCreditorUniqueId: (
    dto: LoansValidateRequiredLoanCreditorUniqueIdInterfaceInputDto
  ) => Promise<void>;
}
