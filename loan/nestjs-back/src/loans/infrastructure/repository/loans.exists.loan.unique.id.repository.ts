import { BadRequestException, Dependencies, Injectable } from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansSearchByUniqueIdInterface } from "../../domain/interfaces/loans.search.by.unique.id.interface";
import { LoansExistsLoanUniqueIdInterfaceInputDto } from "../../inbound/dtos/interfaces/loans.exists.loan.unique.id.interface.input.dto";
import { LoansExistsLoanUniqueIdInterfaceOutputDto } from "../../outbound/dtos/interfaces/loans.exists.loan.unique.id.interface.output.dto";
import { UNIQUE_ID_REQUIRED } from "../../../_common/constants/http/errors/400";
import { LoansExistsLoanUniqueIdInterface } from "../../domain/interfaces/loans.exists.loan.unique.id.interface";

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
    if (!id) throw new BadRequestException(UNIQUE_ID_REQUIRED);

    const searchLoan = await this.prisma.loans.findUnique({ where: { id } });

    return { response: { existsLoanUniqueId: !!searchLoan } };
  }
}
