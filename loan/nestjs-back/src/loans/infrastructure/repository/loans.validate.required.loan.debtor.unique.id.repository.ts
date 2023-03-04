import { BadRequestException, Dependencies, Injectable } from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansValidateRequiredLoanDebtorUniqueIdInterface } from "../../domain/interface/loans.validate.required.loan.debtor.unique.id.interface";
import { LoansValidateRequiredLoanDebtorUniqueIdInterfaceInputDto } from "../../inbound/dtos/interface/loans.validate.required.loan.debtor.unique.id.interface.input.dto";
import { DEBTOR_UNIQUE_ID_REQUIRED } from "../../../_common/constants/http/errors/400";

@Injectable()
@Dependencies([PrismaService])
export class LoansValidateRequiredLoanDebtorUniqueIdRepository
  implements LoansValidateRequiredLoanDebtorUniqueIdInterface
{
  public async validateRequiredLoanDebtorUniqueId(
    dto: LoansValidateRequiredLoanDebtorUniqueIdInterfaceInputDto
  ): Promise<void> {
    const { debtorUniqueId } = dto;

    if (!debtorUniqueId)
      throw new BadRequestException(DEBTOR_UNIQUE_ID_REQUIRED);
  }
}
