import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { LoansUpdateAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.update.adaptor.output.dto";
import { LoansUpdateAdaptor } from "../../domain/adaptor/loans.update.adaptor";
import { LoansUpdateAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.update.adaptor.input.dto";
import { UNIQUE_ID_REQUIRED } from "../../../_common/constants/http/errors/400";
import { LoansExistsLoanInterface } from "../../domain/interface/loans.exists.loan.interface";

@Injectable()
export class LoansUpdateUseCase implements LoansUpdateAdaptor {
  constructor(
    @Inject("UPDATE") private readonly repository: LoansUpdateAdaptor,
    @Inject("EXISTS_LOAN")
    private readonly existsDbLoanWith: LoansExistsLoanInterface
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
    const loan = await this.existsDbLoanWith.existsLoan({ id });

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
