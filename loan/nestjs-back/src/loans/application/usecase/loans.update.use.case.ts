import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { LoansUpdateAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.update.adaptor.output.dto";
import { LoansUpdateAdaptor } from "../../domain/adaptor/loans.update.adaptor";
import { LoansUpdateAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.update.adaptor.input.dto";
import {
  LOAN_UNIQUE_ID_REQUIRED,
  UNIQUE_ID_REQUIRED,
} from "../../../_common/constants/http/errors/400";
import { LoansExistsLoanUniqueIdInterface } from "../../domain/interface/loans.exists.loan.unique.id.interface";
import { LoansSearchByUniqueIdInterface } from "../../domain/interface/loans.search.by.unique.id.interface";

@Injectable()
export class LoansUpdateUseCase implements LoansUpdateAdaptor {
  constructor(
    @Inject("UPDATE") private readonly repository: LoansUpdateAdaptor,
    @Inject("EXISTS_LOAN")
    private readonly existsDBLoanWith: LoansExistsLoanUniqueIdInterface,
    @Inject("SEARCH_UNIQUE_ID")
    private readonly searchDBUniqueIdWith: LoansSearchByUniqueIdInterface
  ) {}

  public async update(
    dto: LoansUpdateAdaptorInputDto
  ): Promise<LoansUpdateAdaptorOutputDto> {
    const {
      id,
      creditorId,
      creditorUniqueId,
      debtorId,
      debtorUniqueId,
      totalAmountLoan,
      interest,
      loanRepaymentDate,
    } = dto;

    if (!id) throw new BadRequestException(UNIQUE_ID_REQUIRED);
    const {
      response: { existsLoanUniqueId },
    } = await this.existsDBLoanWith.existsLoanUniqueId({ id });
    if (!existsLoanUniqueId)
      throw new BadRequestException(LOAN_UNIQUE_ID_REQUIRED);

    const loan = await this.searchDBUniqueIdWith.searchByUniqueId({ id });

    const updateCreditorUniqueId: string =
      creditorUniqueId === ""
        ? loan.response.creditorUniqueId
        : creditorUniqueId;
    const updateCreditorId: string =
      creditorId === "" ? loan.response.creditorId : creditorId;
    const updateDebtorUniqueId: string =
      debtorUniqueId === "" ? loan.response.debtorUniqueId : debtorUniqueId;
    const updateDebtorId: string =
      debtorId === "" ? loan.response.debtorId : debtorId;
    const updateTotalAmountLoan: number =
      totalAmountLoan < 0 ? loan.response.totalAmountLoan : totalAmountLoan;
    const updateInterest: number =
      interest < 1 ? loan.response.interest : interest;
    const updateLoanRepaymentDate: string =
      loanRepaymentDate === ""
        ? loan.response.loanRepaymentDate
        : loanRepaymentDate;

    return await this.repository.update({
      ...dto,
      creditorUniqueId: updateCreditorUniqueId,
      creditorId: updateCreditorId,
      debtorUniqueId: updateDebtorUniqueId,
      debtorId: updateDebtorId,
      totalAmountLoan: updateTotalAmountLoan,
      interest: updateInterest,
      loanRepaymentDate: updateLoanRepaymentDate,
    });
  }
}
