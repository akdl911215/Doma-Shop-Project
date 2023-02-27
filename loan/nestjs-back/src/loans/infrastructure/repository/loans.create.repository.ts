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
      debtorUniqueId,
      debtorId,
      creditorUniqueId,
      creditorId,
      totalAmountLoan,
      loanRepaymentDate,
      interest,
    } = dto;

    const searchDebtor = await this.prisma.users.findUnique({
      where: { id: debtorUniqueId },
    });
    const searchCreditor = await this.prisma.users.findUnique({
      where: { id: creditorUniqueId },
    });
    if (!searchDebtor || !searchCreditor)
      throw new NotFoundException(NOTFOUND_USER);

    try {
      const [createLoan] = await this.prisma.$transaction([
        this.prisma.loans.create({
          data: {
            debtorUniqueId,
            debtorId,
            creditorUniqueId,
            creditorId,
            totalAmountLoan,
            loanRepaymentDate,
            interest,
          },
        }),
        this.prisma.debtors.create({
          data: {
            debtorUniqueId,
          },
        }),
        this.prisma.creditors.create({
          data: {
            creditorUniqueId,
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
