import { Inject, Injectable } from "@nestjs/common";
import { LoansInquiryAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.inquiry.adaptor.output.dto";
import { LoansInquiryAdaptor } from "../../domain/adaptor/loans.inquiry.adaptor";
import { LoansInquiryAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.inquiry.adaptor.input.dto";
import { LoansValidateRequiredLoanUniqueIdInterface } from "../../domain/interface/loans.validate.required.loan.unique.id.interface";
import { LoansValidateRequiredLoanCreditorUniqueIdInterface } from "../../domain/interface/loans.validate.required.loan.creditor.unique.id.interface";
import { LoansValidateRequiredLoanDebtorUniqueIdInterface } from "../../domain/interface/loans.validate.required.loan.debtor.unique.id.interface";
import { LoansExistsLoanUniqueIdInterface } from "../../domain/interface/loans.exists.loan.unique.id.interface";
import { LoansExistsLoanCreditorUniqueIdInterface } from "../../domain/interface/loans.exists.loan.creditor.unique.id.interface";
import { LoansExistsLoanDebtorUniqueIdInterface } from "../../domain/interface/loans.exists.loan.debtor.unique.id.interface";

@Injectable()
export class LoansInquiryUseCase implements LoansInquiryAdaptor {
  constructor(
    @Inject("INQUIRY") private readonly repository: LoansInquiryAdaptor,
    @Inject("VALIDATE_REQUIRED_LOAN_UNIQUE_ID")
    private readonly compareDbUniqueIdWith: LoansValidateRequiredLoanUniqueIdInterface,
    @Inject("EXISTS_LOAN_UNIQUE_ID")
    private readonly compareExistsDbUniqueIdWith: LoansExistsLoanUniqueIdInterface,
    @Inject("VALIDATE_REQUIRED_LOAN_CREDITOR_UNIQUE_ID")
    private readonly compareDbCreditorUniqueIdWith: LoansValidateRequiredLoanCreditorUniqueIdInterface,
    @Inject("EXISTS_LOAN_CREDITOR_UNIQUE_ID")
    private readonly compareExistsDbCreditorUniqueIdWith: LoansExistsLoanCreditorUniqueIdInterface,
    @Inject("VALIDATE_REQUIRED_LOAN_DEBTOR_UNIQUE_ID")
    private readonly compareDbDebtorUniqueIdWith: LoansValidateRequiredLoanDebtorUniqueIdInterface,
    @Inject("EXISTS_LOAN_DEBTOR_UNIQUE_ID")
    private readonly compareExistsDbDebtorUniqueIdWith: LoansExistsLoanDebtorUniqueIdInterface
  ) {}

  public async inquiry(
    dto: LoansInquiryAdaptorInputDto
  ): Promise<LoansInquiryAdaptorOutputDto> {
    const { id, creditorUniqueId, debtorUniqueId } = dto;

    await this.compareDbUniqueIdWith.validateRequiredLoanUniqueId({ id });
    await this.compareExistsDbUniqueIdWith.existsLoanUniqueId({ id });

    await this.compareDbDebtorUniqueIdWith.validateRequiredLoanDebtorUniqueId({
      debtorUniqueId,
    });
    await this.compareExistsDbDebtorUniqueIdWith.existsLoanDebtorUniqueId({
      debtorUniqueId,
    });

    await this.compareDbCreditorUniqueIdWith.validateRequiredLoanCreditorUniqueId(
      { creditorUniqueId }
    );
    await this.compareExistsDbCreditorUniqueIdWith.existsLoanCreditorUniqueId({
      creditorUniqueId,
    });

    return await this.repository.inquiry(dto);
  }
}
