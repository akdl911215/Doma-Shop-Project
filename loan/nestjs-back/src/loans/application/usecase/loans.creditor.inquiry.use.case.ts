import { Inject, Injectable } from "@nestjs/common";
import { LoansCreditorInquiryAdaptor } from "../../domain/adaptor/loans.creditor.inquiry.adaptor";
import { LoansCreditorInquiryAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.creditor.inquiry.adaptor.output.dto";
import { LoansCreditorInquiryAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.creditor.inquiry.adaptor.input.dto";

@Injectable()
export class LoansCreditorInquiryUseCase
  implements LoansCreditorInquiryAdaptor
{
  constructor(
    @Inject("CREDITOR_INQUIRY")
    private readonly repository: LoansCreditorInquiryAdaptor
  ) {}

  public async creditorInquiry(
    dto: LoansCreditorInquiryAdaptorInputDto
  ): Promise<LoansCreditorInquiryAdaptorOutputDto> {
    const { id, creditorUniqueId } = dto;
    return Promise.resolve(undefined);
  }
}
