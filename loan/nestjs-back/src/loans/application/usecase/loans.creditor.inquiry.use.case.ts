import { Inject, Injectable } from "@nestjs/common";
import { LoansCreditorInquiryAdaptor } from "../../domain/adaptor/loans.creditor.inquiry.adaptor";
import { LoansCreditorInquiryAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.creditor.inquiry.adaptor.output.dto";
import { LoansCreditorInquiryAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.creditor.inquiry.adaptor.input.dto";
import { LoansValidateRequiredLoanUniqueIdInterface } from "../../domain/interface/loans.validate.required.loan.unique.id.interface";
import { LoansExistsLoanUniqueIdInterface } from "../../domain/interface/loans.exists.loan.unique.id.interface";
import { LoansValidateRequiredLoanCreditorUniqueIdInterface } from "../../domain/interface/loans.validate.required.loan.creditor.unique.id.interface";
import { LoansExistsLoanCreditorUniqueIdInterface } from "../../domain/interface/loans.exists.loan.creditor.unique.id.interface";

@Injectable()
export class LoansCreditorInquiryUseCase
  implements LoansCreditorInquiryAdaptor
{
  constructor(
    @Inject("CREDITOR_INQUIRY")
    private readonly repository: LoansCreditorInquiryAdaptor,
    @Inject("VALIDATE_REQUIRED_LOAN_UNIQUE_ID")
    private readonly compareDbUniqueIdWith: LoansValidateRequiredLoanUniqueIdInterface,
    @Inject("EXISTS_LOAN_UNIQUE_ID")
    private readonly compareExistsDbUniqueIdWith: LoansExistsLoanUniqueIdInterface,
    @Inject("VALIDATE_REQUIRED_LOAN_CREDITOR_UNIQUE_ID")
    private readonly compareDbCreditorUniqueIdWith: LoansValidateRequiredLoanCreditorUniqueIdInterface,
    @Inject("EXISTS_LOAN_CREDITOR_UNIQUE_ID")
    private readonly compareExistsDbCreditorUniqueIdWith: LoansExistsLoanCreditorUniqueIdInterface
  ) {}

  public async creditorInquiry(
    dto: LoansCreditorInquiryAdaptorInputDto
  ): Promise<LoansCreditorInquiryAdaptorOutputDto> {
    const { id, creditorUniqueId } = dto;

    await this.compareDbUniqueIdWith.validateRequiredLoanUniqueId({ id });
    await this.compareExistsDbUniqueIdWith.existsLoanUniqueId({ id });

    await this.compareDbCreditorUniqueIdWith.validateRequiredLoanCreditorUniqueId(
      { creditorUniqueId }
    );
    await this.compareExistsDbCreditorUniqueIdWith.existsLoanCreditorUniqueId({
      creditorUniqueId,
    });

    return this.repository.creditorInquiry(dto);
  }
}
