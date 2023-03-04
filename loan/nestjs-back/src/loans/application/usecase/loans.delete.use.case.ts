import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { LoansDeleteAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.delete.adaptor.output.dto";
import { LoansDeleteAdaptor } from "../../domain/adaptor/loans.delete.adaptor";
import { LoansDeleteAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.delete.adaptor.input.dto";
import {
  CREDITOR_UNIQUE_ID_REQUIRED,
  DEBTOR_UNIQUE_ID_REQUIRED,
  UNIQUE_ID_REQUIRED,
} from "../../../_common/constants/http/errors/400";

@Injectable()
export class LoansDeleteUseCase implements LoansDeleteAdaptor {
  constructor(
    @Inject("DELETE") private readonly repository: LoansDeleteAdaptor
  ) {}

  public async delete(
    dto: LoansDeleteAdaptorInputDto
  ): Promise<LoansDeleteAdaptorOutputDto> {
    const { id, debtorUniqueId, creditorUniqueId } = dto;

    if (!id) throw new BadRequestException(UNIQUE_ID_REQUIRED);
    if (!debtorUniqueId)
      throw new BadRequestException(DEBTOR_UNIQUE_ID_REQUIRED);
    if (!creditorUniqueId)
      throw new BadRequestException(CREDITOR_UNIQUE_ID_REQUIRED);

    return await this.repository.delete(dto);
  }
}
