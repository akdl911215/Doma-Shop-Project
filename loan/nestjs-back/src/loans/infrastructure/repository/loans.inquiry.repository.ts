import { Dependencies, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansInquiryAdaptorOutputDto } from "../../outbound/dtos/loans.inquiry.adaptor.output.dto";
import { LoansInquiryAdaptor } from "../../domain/adaptor/loans.inquiry.adaptor";
import { LoansInquiryAdaptorInputDto } from "../../inbound/dtos/loans.inquiry.adaptor.input.dto";
import {
  NOTFOUND_LOAN,
  NOTFOUND_USER,
} from "../../../_common/constants/http/errors/404";

@Injectable()
@Dependencies([PrismaService])
export class LoansInquiryRepository implements LoansInquiryAdaptor {
  constructor(private readonly prisma: PrismaService) {}

  public async inquiry(
    dto: LoansInquiryAdaptorInputDto
  ): Promise<LoansInquiryAdaptorOutputDto> {
    const { id, userUniqueId } = dto;

    const loan = this.prisma.loans.findUnique({ where: { id } });
    if (!loan) throw new NotFoundException(NOTFOUND_LOAN);

    const user = this.prisma.users.findUnique({ where: { id: userUniqueId } });
    if (!user) throw new NotFoundException(NOTFOUND_USER);

    return { response: loan };
  }
}
