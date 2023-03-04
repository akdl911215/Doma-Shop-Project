import { LoansInquiryAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.inquiry.adaptor.output.dto";
import { LoansInquiryAdaptor } from "../../domain/adaptor/loans.inquiry.adaptor";
import { LoansInquiryAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.inquiry.adaptor.input.dto";
import { LoansValidateRequiredLoanUniqueIdInterface } from "../../domain/interface/loans.validate.required.loan.unique.id.interface";
import { LoansValidateRequiredLoanCreditorUniqueIdInterface } from "../../domain/interface/loans.validate.required.loan.creditor.unique.id.interface";
import { LoansValidateRequiredLoanDebtorUniqueIdInterface } from "../../domain/interface/loans.validate.required.loan.debtor.unique.id.interface";
import { LoansExistsLoanUniqueIdInterface } from "../../domain/interface/loans.exists.loan.unique.id.interface";
import { LoansExistsLoanCreditorUniqueIdInterface } from "../../domain/interface/loans.exists.loan.creditor.unique.id.interface";
import { LoansExistsLoanDebtorUniqueIdInterface } from "../../domain/interface/loans.exists.loan.debtor.unique.id.interface";
export declare class LoansInquiryUseCase implements LoansInquiryAdaptor {
    private readonly repository;
    private readonly compareDbUniqueIdWith;
    private readonly compareExistsDbUniqueIdWith;
    private readonly compareDbCreditorUniqueIdWith;
    private readonly compareExistsDbCreditorUniqueIdWith;
    private readonly compareDbDebtorUniqueIdWith;
    private readonly compareExistsDbDebtorUniqueIdWith;
    constructor(repository: LoansInquiryAdaptor, compareDbUniqueIdWith: LoansValidateRequiredLoanUniqueIdInterface, compareExistsDbUniqueIdWith: LoansExistsLoanUniqueIdInterface, compareDbCreditorUniqueIdWith: LoansValidateRequiredLoanCreditorUniqueIdInterface, compareExistsDbCreditorUniqueIdWith: LoansExistsLoanCreditorUniqueIdInterface, compareDbDebtorUniqueIdWith: LoansValidateRequiredLoanDebtorUniqueIdInterface, compareExistsDbDebtorUniqueIdWith: LoansExistsLoanDebtorUniqueIdInterface);
    inquiry(dto: LoansInquiryAdaptorInputDto): Promise<LoansInquiryAdaptorOutputDto>;
}
