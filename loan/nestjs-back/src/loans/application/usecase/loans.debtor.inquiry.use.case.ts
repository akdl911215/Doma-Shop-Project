import { Inject, Injectable } from "@nestjs/common";
import { LoansDebtorInquiryAdaptor } from "../../domain/adaptor/loans.debtor.inquiry.adaptor";
import { LoansDebtorInquiryAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.debtor.inquiry.adaptor.input.dto";
import { LoansDebtorInquiryAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.debtor.inquiry.adaptor.output.dto";
import { LoansValidateRequiredLoanUniqueIdInterface } from "../../domain/interface/loans.validate.required.loan.unique.id.interface";
import { LoansExistsLoanUniqueIdInterface } from "../../domain/interface/loans.exists.loan.unique.id.interface";
import { LoansValidateRequiredLoanDebtorUniqueIdInterface } from "../../domain/interface/loans.validate.required.loan.debtor.unique.id.interface";
import { LoansExistsLoanDebtorUniqueIdInterface } from "../../domain/interface/loans.exists.loan.debtor.unique.id.interface";

@Injectable()
export class LoansDebtorInquiryUseCase implements LoansDebtorInquiryAdaptor {
  constructor(
    @Inject("DEBTOR_INQUIRY")
    private readonly repository: LoansDebtorInquiryAdaptor,
    @Inject("VALIDATE_REQUIRED_LOAN_UNIQUE_ID")
    private readonly compareDbUniqueIdWith: LoansValidateRequiredLoanUniqueIdInterface,
    @Inject("EXISTS_LOAN_UNIQUE_ID")
    private readonly compareExistsDbUniqueIdWith: LoansExistsLoanUniqueIdInterface,
    @Inject("VALIDATE_REQUIRED_LOAN_DEBTOR_UNIQUE_ID")
    private readonly compareDbDebtorUniqueIdWith: LoansValidateRequiredLoanDebtorUniqueIdInterface,
    @Inject("EXISTS_LOAN_DEBTOR_UNIQUE_ID")
    private readonly compareExistsDbDebtorUniqueIdWith: LoansExistsLoanDebtorUniqueIdInterface
  ) {}

  public async debtorInquiry(
    dto: LoansDebtorInquiryAdaptorInputDto
  ): Promise<LoansDebtorInquiryAdaptorOutputDto> {
    const { id, debtorUniqueId } = dto;

    await this.compareDbUniqueIdWith.validateRequiredLoanUniqueId({ id });
    await this.compareExistsDbUniqueIdWith.existsLoanUniqueId({ id });

    await this.compareDbDebtorUniqueIdWith.validateRequiredLoanDebtorUniqueId({
      debtorUniqueId,
    });
    await this.compareExistsDbDebtorUniqueIdWith.existsLoanDebtorUniqueId({
      debtorUniqueId,
    });

    return this.repository.debtorInquiry(dto);
  }
}
