import { LoansCreateAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.create.adaptor.output.dto";
import { LoansCreateAdaptor } from "../../domain/adaptor/loans.create.adaptor";
import { LoansCreateAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.create.adaptor.input.dto";
import { LoansValidateRequiredLoanCreditorUniqueIdInterface } from "../../domain/interface/loans.validate.required.loan.creditor.unique.id.interface";
import { LoansValidateRequiredLoanDebtorUniqueIdInterface } from "../../domain/interface/loans.validate.required.loan.debtor.unique.id.interface";
export declare class LoansCreateUseCase implements LoansCreateAdaptor {
    private readonly repository;
    private readonly compareDbCreditorUniqueIdWith;
    private readonly compareDbDebtorUniqueIdWith;
    constructor(repository: LoansCreateAdaptor, compareDbCreditorUniqueIdWith: LoansValidateRequiredLoanCreditorUniqueIdInterface, compareDbDebtorUniqueIdWith: LoansValidateRequiredLoanDebtorUniqueIdInterface);
    create(dto: LoansCreateAdaptorInputDto): Promise<LoansCreateAdaptorOutputDto>;
}
