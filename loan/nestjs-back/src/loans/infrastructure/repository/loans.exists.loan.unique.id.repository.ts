import { Dependencies, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansExistsLoanUniqueIdInterface } from "../../domain/interface/loans.exists.loan.unique.id.interface";
import { LoansExistsLoanUniqueIdInterfaceInputDto } from "../../inbound/dtos/interface/loans.exists.loan.unique.id.interface.input.dto";
import { LoansExistsLoanUniqueIdInterfaceOutputDto } from "../../outbound/dtos/interface/loans.exists.loan.unique.id.interface.output.dto";
import { NOTFOUND_LOAN } from "../../../_common/constants/http/errors/404";

@Injectable()
@Dependencies([PrismaService])
export class LoansExistsLoanUniqueIdRepository
  implements LoansExistsLoanUniqueIdInterface
{
  constructor(private readonly prisma: PrismaService) {}

  public async existsLoanUniqueId(
    dto: LoansExistsLoanUniqueIdInterfaceInputDto
  ): Promise<LoansExistsLoanUniqueIdInterfaceOutputDto> {
    const { id } = dto;

    const searchLoan = await this.prisma.loans.findUnique({ where: { id } });
    if (!searchLoan) throw new NotFoundException(NOTFOUND_LOAN);

    return { response: searchLoan };
  }
}
