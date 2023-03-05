import { LoansCreditorInquiryAdaptor } from "../../domain/adaptor/loans.creditor.inquiry.adaptor";
import { LoansCreditorInquiryAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.creditor.inquiry.adaptor.output.dto";
import { LoansCreditorInquiryAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.creditor.inquiry.adaptor.input.dto";
import { LoansValidateRequiredLoanUniqueIdInterface } from "../../domain/interface/loans.validate.required.loan.unique.id.interface";
import { LoansExistsLoanUniqueIdInterface } from "../../domain/interface/loans.exists.loan.unique.id.interface";
import { LoansValidateRequiredLoanCreditorUniqueIdInterface } from "../../domain/interface/loans.validate.required.loan.creditor.unique.id.interface";
import { LoansExistsLoanCreditorUniqueIdInterface } from "../../domain/interface/loans.exists.loan.creditor.unique.id.interface";
export declare class LoansCreditorInquiryUseCase implements LoansCreditorInquiryAdaptor {
    private readonly repository;
    private readonly compareDbUniqueIdWith;
    private readonly compareExistsDbUniqueIdWith;
    private readonly compareDbCreditorUniqueIdWith;
    private readonly compareExistsDbCreditorUniqueIdWith;
    constructor(repository: LoansCreditorInquiryAdaptor, compareDbUniqueIdWith: LoansValidateRequiredLoanUniqueIdInterface, compareExistsDbUniqueIdWith: LoansExistsLoanUniqueIdInterface, compareDbCreditorUniqueIdWith: LoansValidateRequiredLoanCreditorUniqueIdInterface, compareExistsDbCreditorUniqueIdWith: LoansExistsLoanCreditorUniqueIdInterface);
    creditorInquiry(dto: LoansCreditorInquiryAdaptorInputDto): Promise<LoansCreditorInquiryAdaptorOutputDto>;
}
