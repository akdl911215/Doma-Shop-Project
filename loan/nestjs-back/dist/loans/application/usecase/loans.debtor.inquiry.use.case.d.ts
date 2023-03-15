import { LoansDebtorInquiryAdaptor } from "../../domain/adaptor/loans.debtor.inquiry.adaptor";
import { LoansDebtorInquiryAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.debtor.inquiry.adaptor.input.dto";
import { LoansDebtorInquiryAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.debtor.inquiry.adaptor.output.dto";
import { LoansExistsLoanUniqueIdInterface } from "../../domain/interface/loans.exists.loan.unique.id.interface";
import { UsersExistsUniqueIdInterface } from "../../domain/interface/users.exists.unique.id.interface";
export declare class LoansDebtorInquiryUseCase implements LoansDebtorInquiryAdaptor {
    private readonly repository;
    private readonly compareExistsDbUniqueIdWith;
    private readonly compareExistsDBUsersUniqueIdWith;
    constructor(repository: LoansDebtorInquiryAdaptor, compareExistsDbUniqueIdWith: LoansExistsLoanUniqueIdInterface, compareExistsDBUsersUniqueIdWith: UsersExistsUniqueIdInterface);
    debtorInquiry(dto: LoansDebtorInquiryAdaptorInputDto): Promise<LoansDebtorInquiryAdaptorOutputDto>;
}
