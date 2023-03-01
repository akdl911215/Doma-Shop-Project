import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { LoansInquiryAdaptorOutputDto } from "../../outbound/dtos/loans.inquiry.adaptor.output.dto";
import { LoansInquiryAdaptor } from "../../domain/adaptor/loans.inquiry.adaptor";
import { LoansInquiryAdaptorInputDto } from "../../inbound/dtos/loans.inquiry.adaptor.input.dto";
import {
  NO_MATCH_CREDITOR_ID,
  NO_MATCH_DEBTOR_ID,
  NO_MATCH_LOAN_ID,
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

    if (!id) throw new BadRequestException(NO_MATCH_LOAN_ID);
    if (!creditorUniqueId) throw new BadRequestException(NO_MATCH_CREDITOR_ID);
    if (!debtorUniqueId) throw new BadRequestException(NO_MATCH_DEBTOR_ID);

    return await this.repository.inquiry(dto);
  }
}
