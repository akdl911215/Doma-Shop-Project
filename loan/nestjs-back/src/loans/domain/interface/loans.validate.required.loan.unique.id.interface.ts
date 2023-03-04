import { LoansValidateRequiredLoanUniqueIdInterfaceInputDto } from "../../inbound/dtos/interface/loans.validate.required.loan.unique.id.interface.input.dto";
import { LoansValidateRequiredLoanUniqueIdInterfaceOutputDto } from "../../outbound/dtos/interface/loans.validate.required.loan.unique.id.interface.output.dto";

export interface LoansValidateRequiredLoanUniqueIdInterface {
  readonly validateRequiredLoanUniqueId: (
    dto: LoansValidateRequiredLoanUniqueIdInterfaceInputDto
  ) => Promise<LoansValidateRequiredLoanUniqueIdInterfaceOutputDto>;
}
