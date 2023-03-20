import { LoansExistsLoanDebtorUniqueIdInterfaceInputDto } from "../../inbound/dtos/interfaces/loans.exists.loan.debtor.unique.id.interface.input.dto";
import { LoansExistsLoanDebtorUniqueIdInterfaceOutputDto } from "../../outbound/dtos/interfaces/loans.exists.loan.debtor.unique.id.interface.output.dto";

export interface LoansExistsLoanDebtorUniqueIdInterface {
  readonly existsLoanDebtorUniqueId: (
    dto: LoansExistsLoanDebtorUniqueIdInterfaceInputDto
  ) => Promise<LoansExistsLoanDebtorUniqueIdInterfaceOutputDto>;
}
