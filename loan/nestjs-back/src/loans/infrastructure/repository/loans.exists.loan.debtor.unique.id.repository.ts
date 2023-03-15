import { BadRequestException, Dependencies, Injectable } from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansExistsLoanDebtorUniqueIdInterface } from "../../domain/interface/loans.exists.loan.debtor.unique.id.interface";
import { LoansExistsLoanDebtorUniqueIdInterfaceInputDto } from "../../inbound/dtos/interface/loans.exists.loan.debtor.unique.id.interface.input.dto";
import { LoansExistsLoanDebtorUniqueIdInterfaceOutputDto } from "../../outbound/dtos/interface/loans.exists.loan.debtor.unique.id.interface.output.dto";
import { DEBTOR_UNIQUE_ID_REQUIRED } from "../../../_common/constants/http/errors/400";

@Injectable()
@Dependencies([PrismaService])
export class LoansExistsLoanDebtorUniqueIdRepository
  implements LoansExistsLoanDebtorUniqueIdInterface
{
  constructor(private readonly prisma: PrismaService) {}

  public async existsLoanDebtorUniqueId(
    dto: LoansExistsLoanDebtorUniqueIdInterfaceInputDto
  ): Promise<LoansExistsLoanDebtorUniqueIdInterfaceOutputDto> {
    const { debtorsId } = dto;
    if (!debtorsId) throw new BadRequestException(DEBTOR_UNIQUE_ID_REQUIRED);

    const searchLoan = await this.prisma.loans.findFirst({
      where: { debtorsId },
    });

    return { response: { existsLoanDebtorUniqueId: !!searchLoan } };
  }
}
