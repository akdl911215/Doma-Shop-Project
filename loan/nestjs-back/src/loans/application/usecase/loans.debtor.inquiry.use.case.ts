import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { LoansDebtorInquiryAdaptor } from "../../domain/adaptor/loans.debtor.inquiry.adaptor";
import { LoansDebtorInquiryAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.debtor.inquiry.adaptor.input.dto";
import { LoansDebtorInquiryAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.debtor.inquiry.adaptor.output.dto";
import { LoansExistsLoanDebtorUniqueIdInterface } from "../../domain/interface/loans.exists.loan.debtor.unique.id.interface";
import { LoansExistsLoanUniqueIdInterface } from "../../domain/interface/loans.exists.loan.unique.id.interface";
import {
  LOAN_DEBTOR_UNIQUE_ID_REQUIRED,
  LOAN_UNIQUE_ID_REQUIRED,
} from "../../../_common/constants/http/errors/400";

@Injectable()
export class LoansDebtorInquiryUseCase implements LoansDebtorInquiryAdaptor {
  constructor(
    @Inject("DEBTOR_INQUIRY")
    private readonly repository: LoansDebtorInquiryAdaptor,
    @Inject("EXISTS_LOAN_UNIQUE_ID")
    private readonly compareExistsDbUniqueIdWith: LoansExistsLoanUniqueIdInterface,
    @Inject("EXISTS_LOAN_DEBTOR_UNIQUE_ID")
    private readonly compareExistsDbDebtorUniqueIdWith: LoansExistsLoanDebtorUniqueIdInterface
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
      response: { existsLoanDebtorUniqueId },
    } = await this.compareExistsDbDebtorUniqueIdWith.existsLoanDebtorUniqueId({
      debtorUniqueId,
    });
    if (existsLoanDebtorUniqueId)
      throw new BadRequestException(LOAN_DEBTOR_UNIQUE_ID_REQUIRED);

    return this.repository.debtorInquiry(dto);
  }
}
