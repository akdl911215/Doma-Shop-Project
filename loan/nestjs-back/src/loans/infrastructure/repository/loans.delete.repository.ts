import {
  Dependencies,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansDeleteAdaptorOutputDto } from "../../outbound/dtos/loans.delete.adaptor.output.dto";
import { LoansDeleteAdaptor } from "../../domain/adaptor/loans.delete.adaptor";
import { LoansDeleteAdaptorInputDto } from "../../inbound/dtos/loans.delete.adaptor.input.dto";
import {
  NOTFOUND_CREDITOR,
  NOTFOUND_DEBTOR,
  NOTFOUND_LOAN,
} from "../../../_common/constants/http/errors/404";

@Injectable()
@Dependencies([PrismaService])
export class LoansDeleteRepository implements LoansDeleteAdaptor {
  constructor(private readonly prisma: PrismaService) {}

  public async delete(
    dto: LoansDeleteAdaptorInputDto
  ): Promise<LoansDeleteAdaptorOutputDto> {
    const { id, debtorId, creditorId } = dto;

    const loan = await this.prisma.loans.findUnique({ where: { id } });
    if (!loan) throw new NotFoundException(NOTFOUND_LOAN);

    const searchDebtor = await this.prisma.users.findUnique({
      where: { id: debtorId },
    });
    if (!searchDebtor) throw new NotFoundException(NOTFOUND_DEBTOR);

    const searchCreditor = await this.prisma.users.findUnique({
      where: { id: creditorId },
    });
    if (!searchCreditor) throw new NotFoundException(NOTFOUND_CREDITOR);

    const searchLoan = await this.prisma.loans.findFirst({
      where: {
        AND: [
          {
            id,
          },
          {
            debtorId,
          },
          {
            creditorId,
          },
        ],
      },
    });

    if (!!searchLoan) {
      try {
        await this.prisma.$transaction([
          this.prisma.loans.delete({
            where: { id },
          }),
        ]);

        return { response: { loanErase: true } };
      } catch (e) {
        if (e instanceof InternalServerErrorException) {
          throw new InternalServerErrorException(e);
        } else {
          throw new Error(`${e}`);
        }
      }
    } else {
      throw new NotFoundException(NOTFOUND_LOAN);
    }
  }
}
