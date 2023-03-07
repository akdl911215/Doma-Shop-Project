import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { LoansCreateAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.create.adaptor.output.dto";
import {
  CREDITOR_ID_REQUIRED,
  CREDITOR_UNIQUE_ID_REQUIRED,
  DEBTOR_ID_REQUIRED,
  DEBTOR_UNIQUE_ID_REQUIRED,
  LOAN_INTEREST_REQUIRED,
  LOAN_REPAYMENT_DATE_REQUIRED,
  LOAN_REQUIRED,
} from "../../../_common/constants/http/errors/400";
import { LoansCreateAdaptor } from "../../domain/adaptor/loans.create.adaptor";
import { LoansCreateAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.create.adaptor.input.dto";
import { LoansExistsLoanDebtorUniqueIdInterface } from "../../domain/interface/loans.exists.loan.debtor.unique.id.interface";
import { LoansExistsLoanCreditorUniqueIdInterface } from "../../domain/interface/loans.exists.loan.creditor.unique.id.interface";

@Injectable()
export class LoansCreateUseCase implements LoansCreateAdaptor {
  constructor(
    @Inject("CREATE") private readonly repository: LoansCreateAdaptor,
    @Inject("EXISTS_LOAN_DEBTOR_UNIQUE_ID")
    private readonly compareExistsDBLoanDebtorUniqueIdWith: LoansExistsLoanDebtorUniqueIdInterface,
    @Inject("EXISTS_LOAN_CREDITOR_UNIQUE_ID")
    private readonly compareExistsDBLoanCreditorUniqueIdWith: LoansExistsLoanCreditorUniqueIdInterface
  ) {}

  public async create(
    dto: LoansCreateAdaptorInputDto
  ): Promise<LoansCreateAdaptorOutputDto> {
    const {
      creditorId,
      creditorUniqueId,
      debtorId,
      debtorUniqueId,
      totalAmountLoan,
      loanRepaymentDate,
      interest,
    } = dto;

    if (!creditorId) throw new BadRequestException(CREDITOR_ID_REQUIRED);
    const {
      response: { existsLoanCreditorUniqueId },
    } =
      await this.compareExistsDBLoanCreditorUniqueIdWith.existsLoanCreditorUniqueId(
        { creditorUniqueId }
      );
    if (existsLoanCreditorUniqueId)
      throw new BadRequestException(CREDITOR_UNIQUE_ID_REQUIRED);

    if (!debtorId) throw new BadRequestException(DEBTOR_ID_REQUIRED);
    const {
      response: { existsLoanDebtorUniqueId },
    } =
      await this.compareExistsDBLoanDebtorUniqueIdWith.existsLoanDebtorUniqueId(
        { debtorUniqueId }
      );
    if (existsLoanDebtorUniqueId)
      throw new BadRequestException(DEBTOR_UNIQUE_ID_REQUIRED);

    if (totalAmountLoan === 0) throw new BadRequestException(LOAN_REQUIRED);

    if (!loanRepaymentDate)
      throw new BadRequestException(LOAN_REPAYMENT_DATE_REQUIRED);

    if (interest <= 0) throw new BadRequestException(LOAN_INTEREST_REQUIRED);

    return await this.repository.create(dto);
  }
}
