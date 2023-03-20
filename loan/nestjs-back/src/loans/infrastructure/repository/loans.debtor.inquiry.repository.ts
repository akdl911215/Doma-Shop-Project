import { Dependencies, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansDebtorInquiryAdaptor } from "../../domain/adaptors/loans.debtor.inquiry.adaptor";
import { LoansDebtorInquiryAdaptorInputDto } from "../../inbound/dtos/adaptors/loans.debtor.inquiry.adaptor.input.dto";
import { LoansDebtorInquiryAdaptorOutputDto } from "../../outbound/dtos/adaptors/loans.debtor.inquiry.adaptor.output.dto";
import { NOTFOUND_LOAN } from "../../../_common/constants/http/errors/404";

@Injectable()
@Dependencies([PrismaService])
export class LoansDebtorInquiryRepository implements LoansDebtorInquiryAdaptor {
  constructor(private readonly prisma: PrismaService) {}

  public async debtorInquiry(
    dto: LoansDebtorInquiryAdaptorInputDto
  ): Promise<LoansDebtorInquiryAdaptorOutputDto> {
    const { id, debtorsId } = dto;

    const loan = await this.prisma.loans.findFirst({
      where: {
        AND: [
          {
            id,
          },
          {
            debtorsId,
          },
        ],
      },
    });
    if (!loan) throw new NotFoundException(NOTFOUND_LOAN);

    return { response: loan };
  }
}
