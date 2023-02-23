import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { LoansDeleteAdaptorOutputDto } from "../../outbound/dtos/loans.delete.adaptor.output.dto";
import { LoansDeleteAdaptor } from "../../domain/adaptor/loans.delete.adaptor";
import { LoansDeleteAdaptorInputDto } from "../../inbound/dtos/loans.delete.adaptor.input.dto";
import {
  NO_MATCH_LOAN_ID,
  NO_MATCH_USER_ID,
} from "../../../_common/constants/http/errors/400";

@Injectable()
export class LoansDeleteUseCase implements LoansDeleteAdaptor {
  constructor(
    @Inject("DELETE") private readonly repository: LoansDeleteAdaptor
  ) {}

  public async delete(
    dto: LoansDeleteAdaptorInputDto
  ): Promise<LoansDeleteAdaptorOutputDto> {
    const { id, userUniqueId } = dto;

    if (!id) throw new BadRequestException(NO_MATCH_LOAN_ID);
    if (!userUniqueId) throw new BadRequestException(NO_MATCH_USER_ID);

    return await this.repository.delete(dto);
  }
}
