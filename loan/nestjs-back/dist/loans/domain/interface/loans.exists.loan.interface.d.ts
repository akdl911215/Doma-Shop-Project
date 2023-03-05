import { LoansExistsLoanInterfaceInputDto } from "../../inbound/dtos/interface/loans.exists.loan.interface.input.dto";
import { LoansExistsLoanInterfaceOutputDto } from "../../outbound/dtos/interface/loans.exists.loan.interface.output.dto";
export interface LoansExistsLoanInterface {
    readonly existsLoan: (dto: LoansExistsLoanInterfaceInputDto) => Promise<LoansExistsLoanInterfaceOutputDto>;
}
