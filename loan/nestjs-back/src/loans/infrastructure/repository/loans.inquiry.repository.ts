import { Dependencies, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansInquiryAdaptorOutputDto } from "../../outbound/dtos/loans.inquiry.adaptor.output.dto";
import { LoansInquiryAdaptor } from "../../domain/adaptor/loans.inquiry.adaptor";
import { LoansInquiryAdaptorInputDto } from "../../inbound/dtos/loans.inquiry.adaptor.input.dto";
import {
  NOTFOUND_CREDITOR,
  NOTFOUND_DEBTOR,
  NOTFOUND_LOAN,
} from "../../../_common/constants/http/errors/404";

@Injectable()
@Dependencies([PrismaService])
export class LoansInquiryRepository implements LoansInquiryAdaptor {
  constructor(private readonly prisma: PrismaService) {}

  public async inquiry(
    dto: LoansInquiryAdaptorInputDto
  ): Promise<LoansInquiryAdaptorOutputDto> {
    const { id, debtorUniqueId, creditorUniqueId } = dto;

    const debtor = await this.prisma.users.findUnique({
      where: { id: debtorUniqueId },
    });
    if (!debtor) throw new NotFoundException(NOTFOUND_DEBTOR);

    const creditor = await this.prisma.users.findUnique({
      where: { id: creditorUniqueId },
    });
    if (!creditor) throw new NotFoundException(NOTFOUND_CREDITOR);

    const loan = await this.prisma.loans.findFirst({
      where: {
        OR: [
          {
            id,
          },
          {
            creditorUniqueId,
          },
          {
            debtorUniqueId,
          },
        ],
      },
    });
    if (!loan) throw new NotFoundException(NOTFOUND_LOAN);

    return { response: loan };
  }
}
