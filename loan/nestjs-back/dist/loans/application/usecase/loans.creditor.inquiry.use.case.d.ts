import { LoansCreditorInquiryAdaptor } from "../../domain/adaptor/loans.creditor.inquiry.adaptor";
import { LoansCreditorInquiryAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.creditor.inquiry.adaptor.output.dto";
import { LoansCreditorInquiryAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.creditor.inquiry.adaptor.input.dto";
export declare class LoansCreditorInquiryUseCase implements LoansCreditorInquiryAdaptor {
    private readonly repository;
    constructor(repository: LoansCreditorInquiryAdaptor);
    creditorInquiry(dto: LoansCreditorInquiryAdaptorInputDto): Promise<LoansCreditorInquiryAdaptorOutputDto>;
}
