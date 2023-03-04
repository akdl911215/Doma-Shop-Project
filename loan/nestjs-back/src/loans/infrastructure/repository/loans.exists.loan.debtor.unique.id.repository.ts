import { Dependencies, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansExistsLoanDebtorUniqueIdInterface } from "../../domain/interface/loans.exists.loan.debtor.unique.id.interface";
import { LoansExistsLoanDebtorUniqueIdInterfaceInputDto } from "../../inbound/dtos/interface/loans.exists.loan.debtor.unique.id.interface.input.dto";
import { LoansExistsLoanDebtorUniqueIdInterfaceOutputDto } from "../../outbound/dtos/interface/loans.exists.loan.debtor.unique.id.interface.output.dto";
import { NOTFOUND_LOAN } from "../../../_common/constants/http/errors/404";

@Injectable()
@Dependencies([PrismaService])
export class LoansExistsLoanDebtorUniqueIdRepository
  implements LoansExistsLoanDebtorUniqueIdInterface
{
  constructor(private readonly prisma: PrismaService) {}

  public async existsLoanDebtorUniqueId(
    dto: LoansExistsLoanDebtorUniqueIdInterfaceInputDto
  ): Promise<LoansExistsLoanDebtorUniqueIdInterfaceOutputDto> {
    const { debtorUniqueId } = dto;

    const searchLoan = await this.prisma.loans.findFirst({
      where: { debtorUniqueId },
    });
    if (!searchLoan) throw new NotFoundException(NOTFOUND_LOAN);

    return { response: searchLoan };
  }
}
