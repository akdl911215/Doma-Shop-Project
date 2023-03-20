import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { LoansInquiryAdaptorOutputDto } from "../../outbound/dtos/adaptors/loans.inquiry.adaptor.output.dto";
import { LoansInquiryAdaptor } from "../../domain/adaptors/loans.inquiry.adaptor";
import { LoansInquiryAdaptorInputDto } from "../../inbound/dtos/adaptors/loans.inquiry.adaptor.input.dto";
import { LoansExistsLoanCreditorUniqueIdInterface } from "../../domain/interfaces/loans.exists.loan.creditor.unique.id.interface";
import { LoansExistsLoanDebtorUniqueIdInterface } from "../../domain/interfaces/loans.exists.loan.debtor.unique.id.interface";
import {
  CREDITOR_UNIQUE_ID_REQUIRED,
  DEBTOR_UNIQUE_ID_REQUIRED,
  UNIQUE_ID_REQUIRED,
} from "../../../_common/constants/http/errors/400";
import { LoansExistsLoanUniqueIdInterface } from "../../domain/interfaces/loans.exists.loan.unique.id.interface";

@Injectable()
export class LoansInquiryUseCase implements LoansInquiryAdaptor {
  constructor(
    @Inject("INQUIRY") private readonly repository: LoansInquiryAdaptor,
    @Inject("EXISTS_LOAN_UNIQUE_ID")
    private readonly compareExistsDbUniqueIdWith: LoansExistsLoanUniqueIdInterface,
    @Inject("EXISTS_LOAN_CREDITOR_UNIQUE_ID")
    private readonly compareExistsDbCreditorUniqueIdWith: LoansExistsLoanCreditorUniqueIdInterface,
    @Inject("EXISTS_LOAN_DEBTOR_UNIQUE_ID")
    private readonly compareExistsDbDebtorUniqueIdWith: LoansExistsLoanDebtorUniqueIdInterface
  ) {}

  public async inquiry(
    dto: LoansInquiryAdaptorInputDto
  ): Promise<LoansInquiryAdaptorOutputDto> {
    const { id, creditorsId, debtorsId } = dto;

    const {
      response: { existsLoanUniqueId },
    } = await this.compareExistsDbUniqueIdWith.existsLoanUniqueId({ id });
    if (existsLoanUniqueId) throw new BadRequestException(UNIQUE_ID_REQUIRED);

    const {
      response: { existsLoanDebtorUniqueId },
    } = await this.compareExistsDbDebtorUniqueIdWith.existsLoanDebtorUniqueId({
      debtorsId,
    });
    if (existsLoanDebtorUniqueId)
      throw new BadRequestException(DEBTOR_UNIQUE_ID_REQUIRED);

    const {
      response: { existsLoanCreditorUniqueId },
    } =
      await this.compareExistsDbCreditorUniqueIdWith.existsLoanCreditorUniqueId(
        {
          creditorsId,
        }
      );
    if (existsLoanCreditorUniqueId)
      throw new BadRequestException(CREDITOR_UNIQUE_ID_REQUIRED);

    return await this.repository.inquiry(dto);
  }
}
