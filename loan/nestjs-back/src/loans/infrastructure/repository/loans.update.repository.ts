import {
  Dependencies,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansUpdateAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.update.adaptor.output.dto";
import { LoansUpdateAdaptor } from "../../domain/adaptor/loans.update.adaptor";
import { LoansUpdateAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.update.adaptor.input.dto";
import { NOTFOUND_LOAN } from "../../../_common/constants/http/errors/404";

@Injectable()
@Dependencies([PrismaService])
export class LoansUpdateRepository implements LoansUpdateAdaptor {
  constructor(private readonly prisma: PrismaService) {}

  public async update(
    dto: LoansUpdateAdaptorInputDto
  ): Promise<LoansUpdateAdaptorOutputDto> {
    const {
      id,
      creditorUniqueId,
      creditorId,
      debtorUniqueId,
      debtorId,
      totalAmountLoan,
      interest,
      loanRepaymentDate,
    } = dto;

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

    try {
      const [updateLoan] = await this.prisma.$transaction([
        this.prisma.loans.update({
          where: { id },
          data: {
            creditorUniqueId,
            creditorId,
            debtorUniqueId,
            debtorId,
            totalAmountLoan,
            interest,
            loanRepaymentDate,
          },
        }),
      ]);

      return { response: updateLoan };
    } catch (e) {
      if (e instanceof InternalServerErrorException) {
        throw new InternalServerErrorException(e);
      } else {
        throw new Error(`${e}`);
      }
    }
  }
}
