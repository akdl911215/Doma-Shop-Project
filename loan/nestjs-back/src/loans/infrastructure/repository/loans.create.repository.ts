import {
  Dependencies,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansCreateAdaptorOutputDto } from "../../outbound/dtos/loans.create.adaptor.output.dto";
import { NOTFOUND_USER } from "../../../_common/constants/http/errors/404";
import { LoansCreateAdaptorInputDto } from "../../inbound/dtos/loans.create.adaptor.input.dto";
import { LoansCreateAdaptor } from "../../domain/adaptor/loans.create.adaptor";

@Injectable()
@Dependencies([PrismaService])
export class LoansCreateRepository implements LoansCreateAdaptor {
  constructor(private readonly prisma: PrismaService) {}

  public async create(
    dto: LoansCreateAdaptorInputDto
  ): Promise<LoansCreateAdaptorOutputDto> {
    const {
      debtor,
      debtorId,
      creditor,
      creditorId,
      totalAmountLoan,
      loanRepaymentDate,
      interest,
    } = dto;

    const dbDebtor = await this.prisma.users.findUnique({
      where: { id: debtorId },
    });
    const dbCreditor = await this.prisma.users.findUnique({
      where: { id: creditorId },
    });
    if (!dbDebtor || !dbCreditor) throw new NotFoundException(NOTFOUND_USER);

    try {
      const [createLoan] = await this.prisma.$transaction([
        this.prisma.loans.create({
          data: {
            debtor,
            debtorId,
            creditor,
            creditorId,
            totalAmountLoan,
            loanRepaymentDate,
            interest,
          },
        }),
      ]);

      return { response: createLoan };
    } catch (e) {
      if (e instanceof InternalServerErrorException) {
        throw new InternalServerErrorException(e);
      } else {
        throw new Error(`${e}`);
      }
    }
  }
}
