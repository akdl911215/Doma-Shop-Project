import { LoansCreditorInquiryAdaptor } from "../../domain/adaptor/loans.creditor.inquiry.adaptor";
import { LoansCreditorInquiryAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.creditor.inquiry.adaptor.output.dto";
import { LoansCreditorInquiryAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.creditor.inquiry.adaptor.input.dto";
import { LoansExistsLoanCreditorUniqueIdInterface } from "../../domain/interface/loans.exists.loan.creditor.unique.id.interface";
import { LoansExistsLoanUniqueIdInterface } from "../../domain/interface/loans.exists.loan.unique.id.interface";
export declare class LoansCreditorInquiryUseCase implements LoansCreditorInquiryAdaptor {
    private readonly repository;
    private readonly compareExistsDbUniqueIdWith;
    private readonly compareExistsDbCreditorUniqueIdWith;
    constructor(repository: LoansCreditorInquiryAdaptor, compareExistsDbUniqueIdWith: LoansExistsLoanUniqueIdInterface, compareExistsDbCreditorUniqueIdWith: LoansExistsLoanCreditorUniqueIdInterface);
    creditorInquiry(dto: LoansCreditorInquiryAdaptorInputDto): Promise<LoansCreditorInquiryAdaptorOutputDto>;
}
