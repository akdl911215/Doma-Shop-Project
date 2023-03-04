import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { LoansInquiryAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.inquiry.adaptor.output.dto";
import { LoansInquiryAdaptor } from "../../domain/adaptor/loans.inquiry.adaptor";
import { LoansInquiryAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.inquiry.adaptor.input.dto";
import {
  CREDITOR_UNIQUE_ID_REQUIRED,
  DEBTOR_UNIQUE_ID_REQUIRED,
  UNIQUE_ID_REQUIRED,
} from "../../../_common/constants/http/errors/400";

@Injectable()
export class LoansInquiryUseCase implements LoansInquiryAdaptor {
  constructor(
    @Inject("INQUIRY") private readonly repository: LoansInquiryAdaptor
  ) {}

  public async inquiry(
    dto: LoansInquiryAdaptorInputDto
  ): Promise<LoansInquiryAdaptorOutputDto> {
    const { id, creditorUniqueId, debtorUniqueId } = dto;

    if (!id) throw new BadRequestException(UNIQUE_ID_REQUIRED);
    if (!debtorUniqueId)
      throw new BadRequestException(DEBTOR_UNIQUE_ID_REQUIRED);
    if (!creditorUniqueId)
      throw new BadRequestException(CREDITOR_UNIQUE_ID_REQUIRED);

    return await this.repository.inquiry(dto);
  }
}
