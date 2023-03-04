import { Dependencies, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansExistsLoanCreditorUniqueIdInterface } from "../../domain/interface/loans.exists.loan.creditor.unique.id.interface";
import { LoansExistsLoanCreditorUniqueIdInterfaceInputDto } from "../../inbound/dtos/interface/loans.exists.loan.creditor.unique.id.interface.input.dto";
import { LoansExistsLoanCreditorUniqueIdInterfaceOutputDto } from "../../outbound/dtos/interface/loans.exists.loan.creditor.unique.id.interface.output.dto";
import { NOTFOUND_LOAN } from "../../../_common/constants/http/errors/404";

@Injectable()
@Dependencies([PrismaService])
export class LoansExistsLoanCreditorUniqueIdRepository
  implements LoansExistsLoanCreditorUniqueIdInterface
{
  constructor(private readonly prisma: PrismaService) {}

  public async existsLoanCreditorUniqueId(
    dto: LoansExistsLoanCreditorUniqueIdInterfaceInputDto
  ): Promise<LoansExistsLoanCreditorUniqueIdInterfaceOutputDto> {
    const { creditorUniqueId } = dto;

    const searchLoan = await this.prisma.loans.findFirst({
      where: { creditorUniqueId },
    });
    if (!searchLoan) throw new NotFoundException(NOTFOUND_LOAN);

    return { response: searchLoan };
  }
}
