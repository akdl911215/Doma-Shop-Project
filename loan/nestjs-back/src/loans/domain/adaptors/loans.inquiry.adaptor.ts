import { LoansInquiryAdaptorOutputDto } from "../../outbound/dtos/adaptors/loans.inquiry.adaptor.output.dto";
import { LoansInquiryAdaptorInputDto } from "../../inbound/dtos/adaptors/loans.inquiry.adaptor.input.dto";

export interface LoansInquiryAdaptor {
  readonly inquiry: (
    dto: LoansInquiryAdaptorInputDto
  ) => Promise<LoansInquiryAdaptorOutputDto>;
}
