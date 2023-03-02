import { Dependencies, Injectable } from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansValidateRequiredLoanDebtorUniqueIdAdaptor } from "../../domain/adaptor/loans.validate.required.loan.debtor.unique.id.adaptor";
import { LoansValidateRequiredLoanDebtorUniqueIdAdaptorInputDto } from "../../inbound/dtos/loans.validate.required.loan.debtor.unique.id.adaptor.input.dto";
import { LoansValidateRequiredLoanDebtorUniqueIdAdaptorOutputDto } from "../../outbound/dtos/loans.validate.required.loan.debtor.unique.id.adaptor.output.dto";

@Injectable()
@Dependencies([PrismaService])
export class LoansValidateRequiredLoanDebtorUniqueIdRepository
  implements LoansValidateRequiredLoanDebtorUniqueIdAdaptor
{
  constructor(private readonly prisma: PrismaService) {}

  public async validateRequiredLoanDebtorUniqueId(
    dto: LoansValidateRequiredLoanDebtorUniqueIdAdaptorInputDto
  ): Promise<LoansValidateRequiredLoanDebtorUniqueIdAdaptorOutputDto> {
    const { debtorUniqueId } = dto;

    const searchLoan = await this.prisma.loans.findFirst({
      where: { debtorUniqueId },
    });
    return { response: searchLoan };
  }
}
