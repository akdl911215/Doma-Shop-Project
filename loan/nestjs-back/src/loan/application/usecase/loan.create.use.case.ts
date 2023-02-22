import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { LoanCreateAdaptor } from "../../domain/adaptor/loan.create.adaptor";
import { LoanCreateAdaptorInputDto } from "../../inbound/dtos/loan.create.adaptor.input.dto";
import { LoanCreateAdaptorOutputDto } from "../../outbound/dtos/loan.create.adaptor.output.dto";
import {
  CONFIRM_REQUIRED_CREDITOR_INFORMATION,
  CONFIRM_REQUIRED_DEBTOR_INFORMATION,
  CONFIRM_REQUIRED_LOAN_INFORMATION,
} from "../../../common/constants/http/errors/400";

@Injectable()
export class LoanCreateUseCase implements LoanCreateAdaptor {
  constructor(
    @Inject("CREATE") private readonly repository: LoanCreateAdaptor
  ) {}

  public async create(
    dto: LoanCreateAdaptorInputDto
  ): Promise<LoanCreateAdaptorOutputDto> {
    const { creditorId, creditor, debtorId, debtor, totalAmountLoan } = dto;

    function confirmCreditorInput(creditorId, creditor): boolean {
      if (creditorId === "" || !creditorId || creditor === "" || !creditor)
        return true;
      else return false;
    }
    if (confirmCreditorInput(creditorId, creditor))
      throw new BadRequestException(CONFIRM_REQUIRED_CREDITOR_INFORMATION);

    function confirmDebtorInput(debtorId, debtor): boolean {
      if (debtorId === "" || !debtorId || debtor === "" || !debtor) return true;
      else return false;
    }
    if (confirmDebtorInput(debtorId, debtor))
      throw new BadRequestException(CONFIRM_REQUIRED_DEBTOR_INFORMATION);

    function confirmTotalAmountLoanInput(totalAmountLoan): boolean {
      if (totalAmountLoan === 0 || !totalAmountLoan) return true;
      else return false;
    }
    if (confirmTotalAmountLoanInput(totalAmountLoan))
      throw new BadRequestException(CONFIRM_REQUIRED_LOAN_INFORMATION);

    return await this.repository.create(dto);
  }
}
