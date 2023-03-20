import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { LoansDebtorInquiryAdaptor } from "../../domain/adaptors/loans.debtor.inquiry.adaptor";
import { LoansDebtorInquiryAdaptorInputDto } from "../../inbound/dtos/adaptors/loans.debtor.inquiry.adaptor.input.dto";
import { LoansDebtorInquiryAdaptorOutputDto } from "../../outbound/dtos/adaptors/loans.debtor.inquiry.adaptor.output.dto";
import { LoansExistsLoanUniqueIdInterface } from "../../domain/interfaces/loans.exists.loan.unique.id.interface";
import {
  LOAN_DEBTOR_UNIQUE_ID_REQUIRED,
  LOAN_UNIQUE_ID_REQUIRED,
} from "../../../_common/constants/http/errors/400";
import { UsersExistsUniqueIdInterface } from "../../domain/interfaces/users.exists.unique.id.interface";

@Injectable()
export class LoansDebtorInquiryUseCase implements LoansDebtorInquiryAdaptor {
  constructor(
    @Inject("DEBTOR_INQUIRY")
    private readonly repository: LoansDebtorInquiryAdaptor,
    @Inject("EXISTS_LOAN_UNIQUE_ID")
    private readonly compareExistsDbUniqueIdWith: LoansExistsLoanUniqueIdInterface,
    @Inject("USERS_EXISTS_FOUND_BY_ID")
    private readonly compareExistsDBUsersUniqueIdWith: UsersExistsUniqueIdInterface
  ) {}

  public async debtorInquiry(
    dto: LoansDebtorInquiryAdaptorInputDto
  ): Promise<LoansDebtorInquiryAdaptorOutputDto> {
    const { id, debtorUniqueId } = dto;

    const {
      response: { existsLoanUniqueId },
    } = await this.compareExistsDbUniqueIdWith.existsLoanUniqueId({ id });
    if (existsLoanUniqueId)
      throw new BadRequestException(LOAN_UNIQUE_ID_REQUIRED);

    const {
      response: { userExistsFoundByUniqueId: existsLoanDebtorUniqueId },
    } = await this.compareExistsDBUsersUniqueIdWith.usersExistsFoundByUniqueId({
      id: debtorUniqueId,
    });
    if (existsLoanDebtorUniqueId)
      throw new BadRequestException(LOAN_DEBTOR_UNIQUE_ID_REQUIRED);

    return this.repository.debtorInquiry(dto);
  }
}
