import { LoansCreateAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.create.adaptor.output.dto";
import { LoansCreateAdaptor } from "../../domain/adaptor/loans.create.adaptor";
import { LoansCreateAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.create.adaptor.input.dto";
import { LoansExistsLoanDebtorUniqueIdInterface } from "../../domain/interface/loans.exists.loan.debtor.unique.id.interface";
import { LoansExistsLoanCreditorUniqueIdInterface } from "../../domain/interface/loans.exists.loan.creditor.unique.id.interface";
export declare class LoansCreateUseCase implements LoansCreateAdaptor {
    private readonly repository;
    private readonly compareExistsDBLoanDebtorUniqueIdWith;
    private readonly compareExistsDBLoanCreditorUniqueIdWith;
    constructor(repository: LoansCreateAdaptor, compareExistsDBLoanDebtorUniqueIdWith: LoansExistsLoanDebtorUniqueIdInterface, compareExistsDBLoanCreditorUniqueIdWith: LoansExistsLoanCreditorUniqueIdInterface);
    create(dto: LoansCreateAdaptorInputDto): Promise<LoansCreateAdaptorOutputDto>;
}
