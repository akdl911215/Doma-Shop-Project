import { LoansInquiryAdaptor } from "../../domain/adaptor/loans.inquiry.adaptor";
export declare class LoansInquiryController {
    private readonly useCase;
    constructor(useCase: LoansInquiryAdaptor);
    private inquiry;
}
