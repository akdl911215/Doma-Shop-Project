import { LoansInquiryAdaptorOutputDto } from "../../outbound/dtos/loans.inquiry.adaptor.output.dto";
import { LoansInquiryAdaptorInputDto } from "../../inbound/dtos/loans.inquiry.adaptor.input.dto";

export interface LoansInquiryAdaptor {
  readonly inquiry: (
    dto: LoansInquiryAdaptorInputDto
  ) => Promise<LoansInquiryAdaptorOutputDto>;
}
