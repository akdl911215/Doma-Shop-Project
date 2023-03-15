import { LoansCreditorInquiryAdaptor } from "../../domain/adaptor/loans.creditor.inquiry.adaptor";
import { LoansCreditorInquiryAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.creditor.inquiry.adaptor.output.dto";
import { LoansCreditorInquiryAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.creditor.inquiry.adaptor.input.dto";
import { LoansExistsLoanUniqueIdInterface } from "../../domain/interface/loans.exists.loan.unique.id.interface";
import { UsersExistsUniqueIdInterface } from "../../domain/interface/users.exists.unique.id.interface";
export declare class LoansCreditorInquiryUseCase implements LoansCreditorInquiryAdaptor {
    private readonly repository;
    private readonly compareExistsDbUniqueIdWith;
    private readonly compareExistsDBUsersUniqueIdWith;
    constructor(repository: LoansCreditorInquiryAdaptor, compareExistsDbUniqueIdWith: LoansExistsLoanUniqueIdInterface, compareExistsDBUsersUniqueIdWith: UsersExistsUniqueIdInterface);
    creditorInquiry(dto: LoansCreditorInquiryAdaptorInputDto): Promise<LoansCreditorInquiryAdaptorOutputDto>;
}
