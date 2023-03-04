import { LoansExistsLoanCreditorUniqueIdInterfaceInputDto } from "../../inbound/dtos/interface/loans.exists.loan.creditor.unique.id.interface.input.dto";
import { LoansExistsLoanCreditorUniqueIdInterfaceOutputDto } from "../../outbound/dtos/interface/loans.exists.loan.creditor.unique.id.interface.output.dto";
export interface LoansExistsLoanCreditorUniqueIdInterface {
    readonly existsLoanCreditorUniqueId: (dto: LoansExistsLoanCreditorUniqueIdInterfaceInputDto) => Promise<LoansExistsLoanCreditorUniqueIdInterfaceOutputDto>;
}
