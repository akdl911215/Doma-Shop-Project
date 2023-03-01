import { LoansDebtorInquiryAdaptorInputDto } from "../../inbound/dtos/loans.debtor.inquiry.adaptor.input.dto";
import { LoansDebtorInquiryAdaptorOutputDto } from "../../outbound/dtos/loans.debtor.inquiry.adaptor.output.dto";

export interface LoansDebtorInquiryAdaptor {
  readonly debtorInquiry: (
    dto: LoansDebtorInquiryAdaptorInputDto
  ) => Promise<LoansDebtorInquiryAdaptorOutputDto>;
}
