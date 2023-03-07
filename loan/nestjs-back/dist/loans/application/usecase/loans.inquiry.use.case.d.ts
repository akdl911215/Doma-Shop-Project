import { LoansInquiryAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.inquiry.adaptor.output.dto";
import { LoansInquiryAdaptor } from "../../domain/adaptor/loans.inquiry.adaptor";
import { LoansInquiryAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.inquiry.adaptor.input.dto";
import { LoansExistsLoanCreditorUniqueIdInterface } from "../../domain/interface/loans.exists.loan.creditor.unique.id.interface";
import { LoansExistsLoanDebtorUniqueIdInterface } from "../../domain/interface/loans.exists.loan.debtor.unique.id.interface";
import { LoansExistsLoanUniqueIdInterface } from "../../domain/interface/loans.exists.loan.unique.id.interface";
export declare class LoansInquiryUseCase implements LoansInquiryAdaptor {
    private readonly repository;
    private readonly compareExistsDbUniqueIdWith;
    private readonly compareExistsDbCreditorUniqueIdWith;
    private readonly compareExistsDbDebtorUniqueIdWith;
    constructor(repository: LoansInquiryAdaptor, compareExistsDbUniqueIdWith: LoansExistsLoanUniqueIdInterface, compareExistsDbCreditorUniqueIdWith: LoansExistsLoanCreditorUniqueIdInterface, compareExistsDbDebtorUniqueIdWith: LoansExistsLoanDebtorUniqueIdInterface);
    inquiry(dto: LoansInquiryAdaptorInputDto): Promise<LoansInquiryAdaptorOutputDto>;
}
