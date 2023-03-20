import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { LoansDeleteAdaptorOutputDto } from "../../outbound/dtos/adaptors/loans.delete.adaptor.output.dto";
import { LoansDeleteAdaptor } from "../../domain/adaptors/loans.delete.adaptor";
import { LoansDeleteAdaptorInputDto } from "../../inbound/dtos/adaptors/loans.delete.adaptor.input.dto";
import { LoansExistsLoanCreditorUniqueIdInterface } from "../../domain/interfaces/loans.exists.loan.creditor.unique.id.interface";
import { LoansExistsLoanDebtorUniqueIdInterface } from "../../domain/interfaces/loans.exists.loan.debtor.unique.id.interface";
import { LoansExistsLoanUniqueIdInterface } from "../../domain/interfaces/loans.exists.loan.unique.id.interface";
import {
  NOTFOUND_LOAN_CREDITOR,
  NOTFOUND_LOAN_DEBTOR,
  NOTFOUND_LOAN_UNIQUE_ID,
} from "../../../_common/constants/http/errors/404";

@Injectable()
export class LoansDeleteUseCase implements LoansDeleteAdaptor {
  constructor(
    @Inject("DELETE") private readonly repository: LoansDeleteAdaptor,
    @Inject("EXISTS_LOAN_UNIQUE_ID")
    private readonly compareExistsDbUniqueIdWith: LoansExistsLoanUniqueIdInterface,
    @Inject("EXISTS_LOAN_CREDITOR_UNIQUE_ID")
    private readonly compareExistsDbCreditorUniqueIdWith: LoansExistsLoanCreditorUniqueIdInterface,
    @Inject("EXISTS_LOAN_DEBTOR_UNIQUE_ID")
    private readonly compareExistsDbDebtorUniqueIdWith: LoansExistsLoanDebtorUniqueIdInterface
  ) {}

  public async delete(
    dto: LoansDeleteAdaptorInputDto
  ): Promise<LoansDeleteAdaptorOutputDto> {
    const { id, debtorUniqueId, creditorUniqueId } = dto;

    const {
      response: { existsLoanUniqueId },
    } = await this.compareExistsDbUniqueIdWith.existsLoanUniqueId({ id });
    if (!existsLoanUniqueId)
      throw new NotFoundException(NOTFOUND_LOAN_UNIQUE_ID);

    const {
      response: { existsLoanDebtorUniqueId },
    } = await this.compareExistsDbDebtorUniqueIdWith.existsLoanDebtorUniqueId({
      debtorUniqueId,
    });
    if (!existsLoanDebtorUniqueId)
      throw new NotFoundException(NOTFOUND_LOAN_DEBTOR);

    const {
      response: { existsLoanCreditorUniqueId },
    } =
      await this.compareExistsDbCreditorUniqueIdWith.existsLoanCreditorUniqueId(
        { creditorUniqueId }
      );
    if (!existsLoanCreditorUniqueId)
      throw new NotFoundException(NOTFOUND_LOAN_CREDITOR);

    return await this.repository.delete(dto);
  }
}
