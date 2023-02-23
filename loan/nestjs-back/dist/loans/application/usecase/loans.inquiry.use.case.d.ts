import { LoansInquiryAdaptorOutputDto } from "../../outbound/dtos/loans.inquiry.adaptor.output.dto";
import { LoansInquiryAdaptor } from "../../domain/adaptor/loans.inquiry.adaptor";
import { LoansInquiryAdaptorInputDto } from "../../inbound/dtos/loans.inquiry.adaptor.input.dto";
export declare class LoansInquiryUseCase implements LoansInquiryAdaptor {
    private readonly repository;
    constructor(repository: LoansInquiryAdaptor);
    inquiry(dto: LoansInquiryAdaptorInputDto): Promise<LoansInquiryAdaptorOutputDto>;
}
