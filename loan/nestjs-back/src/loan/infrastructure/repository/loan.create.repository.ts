import {
  Dependencies,
  Injectable,
  InternalServerErrorException,
} from "@nestjs/common";
import { PrismaService } from "../../../common/infrastructures/prisma/prisma.service";
import { LoanCreateAdaptor } from "../../domain/adaptor/loan.create.adaptor";
import { LoanCreateAdaptorOutputDto } from "../../outbound/dtos/loan.create.adaptor.output.dto";
import { LoanCreateAdaptorInputDto } from "../../inbound/dtos/loan.create.adaptor.input.dto";

@Injectable()
@Dependencies([PrismaService])
export class LoanCreateRepository implements LoanCreateAdaptor {
  constructor(private readonly prisma: PrismaService) {}

  public async create(
    dto: LoanCreateAdaptorInputDto
  ): Promise<LoanCreateAdaptorOutputDto> {
    const { debtor, debtorId, creditor, creditorId, totalAmountLoan } = dto;

    try {
      const [createLoan] = await this.prisma.$transaction([
        this.prisma.loans.create({
          data: {
            debtor,
            debtorId,
            creditor,
            creditorId,
            totalAmountLoan,
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
