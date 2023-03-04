import { Inject, Injectable } from "@nestjs/common";
import { LoansDeleteAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.delete.adaptor.output.dto";
import { LoansDeleteAdaptor } from "../../domain/adaptor/loans.delete.adaptor";
import { LoansDeleteAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.delete.adaptor.input.dto";
import { LoansValidateRequiredLoanUniqueIdInterface } from "../../domain/interface/loans.validate.required.loan.unique.id.interface";
import { LoansExistsLoanUniqueIdInterface } from "../../domain/interface/loans.exists.loan.unique.id.interface";
import { LoansValidateRequiredLoanCreditorUniqueIdInterface } from "../../domain/interface/loans.validate.required.loan.creditor.unique.id.interface";
import { LoansExistsLoanCreditorUniqueIdInterface } from "../../domain/interface/loans.exists.loan.creditor.unique.id.interface";
import { LoansValidateRequiredLoanDebtorUniqueIdInterface } from "../../domain/interface/loans.validate.required.loan.debtor.unique.id.interface";
import { LoansExistsLoanDebtorUniqueIdInterface } from "../../domain/interface/loans.exists.loan.debtor.unique.id.interface";

@Injectable()
export class LoansDeleteUseCase implements LoansDeleteAdaptor {
  constructor(
    @Inject("DELETE") private readonly repository: LoansDeleteAdaptor,
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

  public async delete(
    dto: LoansDeleteAdaptorInputDto
  ): Promise<LoansDeleteAdaptorOutputDto> {
    const { id, debtorUniqueId, creditorUniqueId } = dto;

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

    return await this.repository.delete(dto);
  }
}
