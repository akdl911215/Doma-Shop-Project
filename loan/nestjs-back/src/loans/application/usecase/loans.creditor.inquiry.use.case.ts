import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { LoansCreditorInquiryAdaptor } from "../../domain/adaptors/loans.creditor.inquiry.adaptor";
import { LoansCreditorInquiryAdaptorOutputDto } from "../../outbound/dtos/adaptors/loans.creditor.inquiry.adaptor.output.dto";
import { LoansCreditorInquiryAdaptorInputDto } from "../../inbound/dtos/adaptors/loans.creditor.inquiry.adaptor.input.dto";
import {
  CREDITOR_UNIQUE_ID_REQUIRED,
  UNIQUE_ID_REQUIRED,
} from "../../../_common/constants/http/errors/400";
import { LoansExistsLoanUniqueIdInterface } from "../../domain/interfaces/loans.exists.loan.unique.id.interface";
import { UsersExistsUniqueIdInterface } from "../../domain/interfaces/users.exists.unique.id.interface";

@Injectable()
export class LoansCreditorInquiryUseCase
  implements LoansCreditorInquiryAdaptor
{
  constructor(
    @Inject("CREDITOR_INQUIRY")
    private readonly repository: LoansCreditorInquiryAdaptor,
    @Inject("EXISTS_LOAN_UNIQUE_ID")
    private readonly compareExistsDbUniqueIdWith: LoansExistsLoanUniqueIdInterface,
    @Inject("USERS_EXISTS_FOUND_BY_ID")
    private readonly compareExistsDBUsersUniqueIdWith: UsersExistsUniqueIdInterface
  ) {}

  public async creditorInquiry(
    dto: LoansCreditorInquiryAdaptorInputDto
  ): Promise<LoansCreditorInquiryAdaptorOutputDto> {
    const { id, creditorUniqueId } = dto;

    const {
      response: { existsLoanUniqueId },
    } = await this.compareExistsDbUniqueIdWith.existsLoanUniqueId({ id });
    if (existsLoanUniqueId) throw new BadRequestException(UNIQUE_ID_REQUIRED);

    const {
      response: { userExistsFoundByUniqueId: existsLoanCreditorUniqueId },
    } = await this.compareExistsDBUsersUniqueIdWith.usersExistsFoundByUniqueId({
      id: creditorUniqueId,
    });
    if (existsLoanCreditorUniqueId)
      throw new BadRequestException(CREDITOR_UNIQUE_ID_REQUIRED);

    return this.repository.creditorInquiry(dto);
  }
}
