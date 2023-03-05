import { Dependencies, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansExistsLoanInterface } from "../../domain/interface/loans.exists.loan.interface";
import { LoansExistsLoanInterfaceInputDto } from "../../inbound/dtos/interface/loans.exists.loan.interface.input.dto";
import { LoansExistsLoanInterfaceOutputDto } from "../../outbound/dtos/interface/loans.exists.loan.interface.output.dto";
import { NOTFOUND_LOAN } from "../../../_common/constants/http/errors/404";

@Injectable()
@Dependencies([PrismaService])
export class LoansExistsLoanRepository implements LoansExistsLoanInterface {
  constructor(private readonly prisma: PrismaService) {}

  public async existsLoan(
    dto: LoansExistsLoanInterfaceInputDto
  ): Promise<LoansExistsLoanInterfaceOutputDto> {
    const { id } = dto;

    const loan = await this.prisma.loans.findFirst({
      where: {
        id,
      },
    });
    if (!loan) throw new NotFoundException(NOTFOUND_LOAN);

    return { response: loan };
  }
}
