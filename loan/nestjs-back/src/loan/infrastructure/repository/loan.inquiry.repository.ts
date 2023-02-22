import { Dependencies, Injectable } from "@nestjs/common";
import { PrismaService } from "../../../common/infrastructures/prisma/prisma.service";
import { LoanInquiryAdaptor } from "../../domain/adaptor/loan.inquiry.adaptor";
import { LoanInquiryAdaptorInputDto } from "../../inbound/dtos/loan.inquiry.adaptor.input.dto";
import { LoanInquiryAdaptorOutputDto } from "../../outbound/dtos/loan.inquiry.adaptor.output.dto";

@Injectable()
@Dependencies([PrismaService])
export class LoanInquiryRepository implements LoanInquiryAdaptor {
  constructor(private readonly prisma: PrismaService) {}

  public async inquiry(
    dto: LoanInquiryAdaptorInputDto
  ): Promise<LoanInquiryAdaptorOutputDto> {
    return Promise.resolve(undefined);
  }
}
