import { LoansCreditorInquiryAdaptorInputDto } from "../../inbound/dtos/loans.creditor.inquiry.adaptor.input.dto";
import { LoansCreditorInquiryAdaptorOutputDto } from "../../outbound/dtos/loans.creditor.inquiry.adaptor.output.dto";

export interface LoansCreditorInquiryAdaptor {
  readonly creditorInquiry: (
    dto: LoansCreditorInquiryAdaptorInputDto
  ) => Promise<LoansCreditorInquiryAdaptorOutputDto>;
}
