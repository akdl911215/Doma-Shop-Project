import { Dependencies, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansInquiryAdaptorOutputDto } from "../../outbound/dtos/adaptors/loans.inquiry.adaptor.output.dto";
import { LoansInquiryAdaptor } from "../../domain/adaptors/loans.inquiry.adaptor";
import { LoansInquiryAdaptorInputDto } from "../../inbound/dtos/adaptors/loans.inquiry.adaptor.input.dto";
import { NOTFOUND_LOAN } from "../../../_common/constants/http/errors/404";

@Injectable()
@Dependencies([PrismaService])
export class LoansInquiryRepository implements LoansInquiryAdaptor {
  constructor(private readonly prisma: PrismaService) {}

  public async inquiry(
    dto: LoansInquiryAdaptorInputDto
  ): Promise<LoansInquiryAdaptorOutputDto> {
    const { id, debtorsId, creditorsId } = dto;

    const loan = await this.prisma.loans.findFirst({
      where: {
        AND: [
          {
            id,
          },
          {
            creditorsId,
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
