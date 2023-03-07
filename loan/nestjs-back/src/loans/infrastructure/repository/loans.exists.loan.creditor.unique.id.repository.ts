import { BadRequestException, Dependencies, Injectable } from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansExistsLoanCreditorUniqueIdInterface } from "../../domain/interface/loans.exists.loan.creditor.unique.id.interface";
import { LoansExistsLoanCreditorUniqueIdInterfaceInputDto } from "../../inbound/dtos/interface/loans.exists.loan.creditor.unique.id.interface.input.dto";
import { LoansExistsLoanCreditorUniqueIdInterfaceOutputDto } from "../../outbound/dtos/interface/loans.exists.loan.creditor.unique.id.interface.output.dto";
import { CREDITOR_UNIQUE_ID_REQUIRED } from "../../../_common/constants/http/errors/400";

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
    if (!creditorUniqueId)
      throw new BadRequestException(CREDITOR_UNIQUE_ID_REQUIRED);

    const searchLoan = await this.prisma.loans.findFirst({
      where: { creditorUniqueId },
    });

    return { response: { existsLoanCreditorUniqueId: !!searchLoan } };
  }
}
