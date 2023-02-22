import { Inject, Injectable } from "@nestjs/common";
import { LoanInquiryAdaptor } from "../../domain/adaptor/loan.inquiry.adaptor";
import { LoanInquiryAdaptorOutputDto } from "../../outbound/dtos/loan.inquiry.adaptor.output.dto";
import { LoanInquiryAdaptorInputDto } from "../../inbound/dtos/loan.inquiry.adaptor.input.dto";

@Injectable()
export class LoanInquiryUseCase implements LoanInquiryAdaptor {
  constructor(
    @Inject("INQUIRY") private readonly repository: LoanInquiryAdaptor
  ) {}

  public async inquiry(
    dto: LoanInquiryAdaptorInputDto
  ): Promise<LoanInquiryAdaptorOutputDto> {
    return Promise.resolve(undefined);
  }
}
