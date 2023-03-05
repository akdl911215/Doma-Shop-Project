import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { LoansUpdateAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.update.adaptor.output.dto";
import { LoansUpdateAdaptor } from "../../domain/adaptor/loans.update.adaptor";
import { LoansUpdateAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.update.adaptor.input.dto";
import { UNIQUE_ID_REQUIRED } from "../../../_common/constants/http/errors/400";

@Injectable()
export class LoansUpdateUseCase implements LoansUpdateAdaptor {
  constructor(
    @Inject("UPDATE") private readonly repository: LoansUpdateAdaptor
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

    return await this.repository.update(dto);
  }
}
