import { CreditorsInquiryAdaptorInputDto } from "../../inbound/dtos/adaptors/creditors.inquiry.adaptor.input.dto";
import { CreditorsInquiryAdaptorOutputDto } from "../../outbound/dtos/adaptors/creditors.inquiry.adaptor.output.dto";

export interface CreditorsInquiryAdaptor {
  readonly inquiry: (
    dto: CreditorsInquiryAdaptorInputDto
  ) => Promise<CreditorsInquiryAdaptorOutputDto>;
}
