import { LoansDebtorInquiryAdaptor } from "../../domain/adaptor/loans.debtor.inquiry.adaptor";
import { LoansDebtorInquiryAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.debtor.inquiry.adaptor.input.dto";
import { LoansDebtorInquiryAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.debtor.inquiry.adaptor.output.dto";
import { LoansValidateRequiredLoanUniqueIdInterface } from "../../domain/interface/loans.validate.required.loan.unique.id.interface";
import { LoansExistsLoanUniqueIdInterface } from "../../domain/interface/loans.exists.loan.unique.id.interface";
import { LoansValidateRequiredLoanDebtorUniqueIdInterface } from "../../domain/interface/loans.validate.required.loan.debtor.unique.id.interface";
import { LoansExistsLoanDebtorUniqueIdInterface } from "../../domain/interface/loans.exists.loan.debtor.unique.id.interface";
export declare class LoansDebtorInquiryUseCase implements LoansDebtorInquiryAdaptor {
    private readonly repository;
    private readonly compareDbUniqueIdWith;
    private readonly compareExistsDbUniqueIdWith;
    private readonly compareDbDebtorUniqueIdWith;
    private readonly compareExistsDbDebtorUniqueIdWith;
    constructor(repository: LoansDebtorInquiryAdaptor, compareDbUniqueIdWith: LoansValidateRequiredLoanUniqueIdInterface, compareExistsDbUniqueIdWith: LoansExistsLoanUniqueIdInterface, compareDbDebtorUniqueIdWith: LoansValidateRequiredLoanDebtorUniqueIdInterface, compareExistsDbDebtorUniqueIdWith: LoansExistsLoanDebtorUniqueIdInterface);
    debtorInquiry(dto: LoansDebtorInquiryAdaptorInputDto): Promise<LoansDebtorInquiryAdaptorOutputDto>;
}
