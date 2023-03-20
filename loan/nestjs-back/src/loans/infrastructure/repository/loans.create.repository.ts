import {
  Dependencies,
  Injectable,
  InternalServerErrorException,
} from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansCreateAdaptorOutputDto } from "../../outbound/dtos/adaptors/loans.create.adaptor.output.dto";
import { LoansCreateAdaptorInputDto } from "../../inbound/dtos/adaptors/loans.create.adaptor.input.dto";
import { LoansCreateAdaptor } from "../../domain/adaptors/loans.create.adaptor";

@Injectable()
@Dependencies([PrismaService])
export class LoansCreateRepository implements LoansCreateAdaptor {
  constructor(private readonly prisma: PrismaService) {}

  public async create(
    dto: LoansCreateAdaptorInputDto
  ): Promise<LoansCreateAdaptorOutputDto> {
    const {
      debtorsId,
      creditorsId,
      totalAmountLoan,
      loanRepaymentDate,
      interest,
    } = dto;

    try {
      const [createLoan] = await this.prisma.$transaction([
        this.prisma.loans.create({
          data: {
            debtorsId,
            creditorsId,
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
