import { LoansExistsLoanUniqueIdInterfaceInputDto } from "../../inbound/dtos/interfaces/loans.exists.loan.unique.id.interface.input.dto";
import { LoansExistsLoanUniqueIdInterfaceOutputDto } from "../../outbound/dtos/interfaces/loans.exists.loan.unique.id.interface.output.dto";

export interface LoansExistsLoanUniqueIdInterface {
  readonly existsLoanUniqueId: (
    dto: LoansExistsLoanUniqueIdInterfaceInputDto
  ) => Promise<LoansExistsLoanUniqueIdInterfaceOutputDto>;
}
