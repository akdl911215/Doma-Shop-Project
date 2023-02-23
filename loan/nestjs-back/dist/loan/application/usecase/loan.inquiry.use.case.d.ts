import { LoanInquiryAdaptor } from "../../domain/adaptor/loan.inquiry.adaptor";
import { LoanInquiryAdaptorOutputDto } from "../../outbound/dtos/loan.inquiry.adaptor.output.dto";
import { LoanInquiryAdaptorInputDto } from "../../inbound/dtos/loan.inquiry.adaptor.input.dto";
export declare class LoanInquiryUseCase implements LoanInquiryAdaptor {
    private readonly repository;
    constructor(repository: LoanInquiryAdaptor);
    inquiry(dto: LoanInquiryAdaptorInputDto): Promise<LoanInquiryAdaptorOutputDto>;
}
