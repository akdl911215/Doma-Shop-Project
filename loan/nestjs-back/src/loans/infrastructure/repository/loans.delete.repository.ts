import {
  Dependencies,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansDeleteAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.delete.adaptor.output.dto";
import { LoansDeleteAdaptor } from "../../domain/adaptor/loans.delete.adaptor";
import { LoansDeleteAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.delete.adaptor.input.dto";
import { NOTFOUND_LOAN } from "../../../_common/constants/http/errors/404";

@Injectable()
@Dependencies([PrismaService])
export class LoansDeleteRepository implements LoansDeleteAdaptor {
  constructor(private readonly prisma: PrismaService) {}

  public async delete(
    dto: LoansDeleteAdaptorInputDto
  ): Promise<LoansDeleteAdaptorOutputDto> {
    const { id, debtorsId, creditorsId } = dto;

    const searchLoan = await this.prisma.loans.findFirst({
      where: {
        AND: [
          {
            id,
          },
          {
            debtorsId,
          },
          {
            creditorsId,
          },
        ],
      },
    });
    if (!searchLoan) throw new NotFoundException(NOTFOUND_LOAN);

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
  }
}
