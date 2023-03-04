import { LoansExistsLoanUniqueIdInterfaceInputDto } from "../../inbound/dtos/interface/loans.exists.loan.unique.id.interface.input.dto";
import { LoansExistsLoanUniqueIdInterfaceOutputDto } from "../../outbound/dtos/interface/loans.exists.loan.unique.id.interface.output.dto";
export interface LoansExistsLoanUniqueIdInterface {
    readonly existsLoanUniqueId: (dto: LoansExistsLoanUniqueIdInterfaceInputDto) => Promise<LoansExistsLoanUniqueIdInterfaceOutputDto>;
}
