import { LoansInquiryAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.inquiry.adaptor.output.dto";
import { LoansInquiryAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.inquiry.adaptor.input.dto";
export interface LoansInquiryAdaptor {
    readonly inquiry: (dto: LoansInquiryAdaptorInputDto) => Promise<LoansInquiryAdaptorOutputDto>;
}
