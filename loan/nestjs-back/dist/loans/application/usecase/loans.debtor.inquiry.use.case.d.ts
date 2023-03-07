import { LoansDebtorInquiryAdaptor } from "../../domain/adaptor/loans.debtor.inquiry.adaptor";
import { LoansDebtorInquiryAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.debtor.inquiry.adaptor.input.dto";
import { LoansDebtorInquiryAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.debtor.inquiry.adaptor.output.dto";
import { LoansExistsLoanDebtorUniqueIdInterface } from "../../domain/interface/loans.exists.loan.debtor.unique.id.interface";
import { LoansExistsLoanUniqueIdInterface } from "../../domain/interface/loans.exists.loan.unique.id.interface";
export declare class LoansDebtorInquiryUseCase implements LoansDebtorInquiryAdaptor {
    private readonly repository;
    private readonly compareExistsDbUniqueIdWith;
    private readonly compareExistsDbDebtorUniqueIdWith;
    constructor(repository: LoansDebtorInquiryAdaptor, compareExistsDbUniqueIdWith: LoansExistsLoanUniqueIdInterface, compareExistsDbDebtorUniqueIdWith: LoansExistsLoanDebtorUniqueIdInterface);
    debtorInquiry(dto: LoansDebtorInquiryAdaptorInputDto): Promise<LoansDebtorInquiryAdaptorOutputDto>;
}
