import { LoansDebtorInquiryAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.debtor.inquiry.adaptor.input.dto";
import { LoansDebtorInquiryAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.debtor.inquiry.adaptor.output.dto";
export interface LoansDebtorInquiryAdaptor {
    readonly debtorInquiry: (dto: LoansDebtorInquiryAdaptorInputDto) => Promise<LoansDebtorInquiryAdaptorOutputDto>;
}
