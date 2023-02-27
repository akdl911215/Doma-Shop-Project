import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { LoansCreateAdaptorOutputDto } from "../../outbound/dtos/loans.create.adaptor.output.dto";
import {
  CREDITOR_REQUIRED,
  DEBTOR_REQUIRED,
  LOAN_INTEREST_REQUIRED,
  LOAN_REPAYMENT_DATE_REQUIRED,
  LOAN_REQUIRED,
} from "../../../_common/constants/http/errors/400";
import { LoansCreateAdaptor } from "../../domain/adaptor/loans.create.adaptor";
import { LoansCreateAdaptorInputDto } from "../../inbound/dtos/loans.create.adaptor.input.dto";

@Injectable()
export class LoansCreateUseCase implements LoansCreateAdaptor {
  constructor(
    @Inject("CREATE") private readonly repository: LoansCreateAdaptor
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

    function confirmCreditorInput(creditorId, creditorUniqueId): boolean {
      if (!creditorId || !creditorUniqueId) return true;
      else return false;
    }
    if (confirmCreditorInput(creditorId, creditorUniqueId))
      throw new BadRequestException(CREDITOR_REQUIRED);

    function confirmDebtorInput(debtorId, debtorUniqueId): boolean {
      if (!debtorId || !debtorUniqueId) return true;
      else return false;
    }
    if (confirmDebtorInput(debtorId, debtorUniqueId))
      throw new BadRequestException(DEBTOR_REQUIRED);

    function confirmTotalAmountLoanInput(totalAmountLoan): boolean {
      if (totalAmountLoan === 0) return true;
      else return false;
    }
    if (confirmTotalAmountLoanInput(totalAmountLoan))
      throw new BadRequestException(LOAN_REQUIRED);

    function confirmLoanRepaymentDate(loanRepaymentDate): boolean {
      if (!loanRepaymentDate) return true;
      else return false;
    }
    if (confirmLoanRepaymentDate(loanRepaymentDate))
      throw new BadRequestException(LOAN_REPAYMENT_DATE_REQUIRED);

    function confirmInterest(interest): boolean {
      if (interest <= 0) return true;
      else return false;
    }
    if (confirmInterest(interest))
      throw new BadRequestException(LOAN_INTEREST_REQUIRED);

    return await this.repository.create(dto);
  }
}
