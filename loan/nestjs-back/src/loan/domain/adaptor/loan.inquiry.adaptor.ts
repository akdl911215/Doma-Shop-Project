import { LoanInquiryAdaptorInputDto } from "../../inbound/dtos/loan.inquiry.adaptor.input.dto";
import { LoanInquiryAdaptorOutputDto } from "../../outbound/dtos/loan.inquiry.adaptor.output.dto";

export interface LoanInquiryAdaptor {
  readonly inquiry: (
    dto: LoanInquiryAdaptorInputDto
  ) => Promise<LoanInquiryAdaptorOutputDto>;
}
