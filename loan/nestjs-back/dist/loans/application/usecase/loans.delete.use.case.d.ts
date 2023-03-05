import { LoansDeleteAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.delete.adaptor.output.dto";
import { LoansDeleteAdaptor } from "../../domain/adaptor/loans.delete.adaptor";
import { LoansDeleteAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.delete.adaptor.input.dto";
import { LoansValidateRequiredLoanUniqueIdInterface } from "../../domain/interface/loans.validate.required.loan.unique.id.interface";
import { LoansExistsLoanUniqueIdInterface } from "../../domain/interface/loans.exists.loan.unique.id.interface";
import { LoansValidateRequiredLoanCreditorUniqueIdInterface } from "../../domain/interface/loans.validate.required.loan.creditor.unique.id.interface";
import { LoansExistsLoanCreditorUniqueIdInterface } from "../../domain/interface/loans.exists.loan.creditor.unique.id.interface";
import { LoansValidateRequiredLoanDebtorUniqueIdInterface } from "../../domain/interface/loans.validate.required.loan.debtor.unique.id.interface";
import { LoansExistsLoanDebtorUniqueIdInterface } from "../../domain/interface/loans.exists.loan.debtor.unique.id.interface";
export declare class LoansDeleteUseCase implements LoansDeleteAdaptor {
    private readonly repository;
    private readonly compareDbUniqueIdWith;
    private readonly compareExistsDbUniqueIdWith;
    private readonly compareDbCreditorUniqueIdWith;
    private readonly compareExistsDbCreditorUniqueIdWith;
    private readonly compareDbDebtorUniqueIdWith;
    private readonly compareExistsDbDebtorUniqueIdWith;
    constructor(repository: LoansDeleteAdaptor, compareDbUniqueIdWith: LoansValidateRequiredLoanUniqueIdInterface, compareExistsDbUniqueIdWith: LoansExistsLoanUniqueIdInterface, compareDbCreditorUniqueIdWith: LoansValidateRequiredLoanCreditorUniqueIdInterface, compareExistsDbCreditorUniqueIdWith: LoansExistsLoanCreditorUniqueIdInterface, compareDbDebtorUniqueIdWith: LoansValidateRequiredLoanDebtorUniqueIdInterface, compareExistsDbDebtorUniqueIdWith: LoansExistsLoanDebtorUniqueIdInterface);
    delete(dto: LoansDeleteAdaptorInputDto): Promise<LoansDeleteAdaptorOutputDto>;
}
