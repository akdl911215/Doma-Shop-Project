import { LoansExistsLoanDebtorUniqueIdInterfaceInputDto } from "../../inbound/dtos/interface/loans.exists.loan.debtor.unique.id.interface.input.dto";
import { LoansExistsLoanDebtorUniqueIdInterfaceOutputDto } from "../../outbound/dtos/interface/loans.exists.loan.debtor.unique.id.interface.output.dto";

export interface LoansExistsLoanDebtorUniqueIdInterface {
  readonly existsLoanDebtorUniqueId: (
    dto: LoansExistsLoanDebtorUniqueIdInterfaceInputDto
  ) => Promise<LoansExistsLoanDebtorUniqueIdInterfaceOutputDto>;
}
