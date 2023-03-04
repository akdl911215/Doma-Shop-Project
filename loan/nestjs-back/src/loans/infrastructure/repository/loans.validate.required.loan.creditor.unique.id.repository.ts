import { BadRequestException, Dependencies, Injectable } from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansValidateRequiredLoanCreditorUniqueIdInterface } from "../../domain/interface/loans.validate.required.loan.creditor.unique.id.interface";
import { LoansValidateRequiredLoanCreditorUniqueIdInterfaceInputDto } from "../../inbound/dtos/interface/loans.validate.required.loan.creditor.unique.id.interface.input.dto";
import { CREDITOR_UNIQUE_ID_REQUIRED } from "../../../_common/constants/http/errors/400";

@Injectable()
@Dependencies([PrismaService])
export class LoansValidateRequiredLoanCreditorUniqueIdRepository
  implements LoansValidateRequiredLoanCreditorUniqueIdInterface
{
  public async validateRequiredLoanCreditorUniqueId(
    dto: LoansValidateRequiredLoanCreditorUniqueIdInterfaceInputDto
  ): Promise<void> {
    const { creditorUniqueId } = dto;

    if (!creditorUniqueId)
      throw new BadRequestException(CREDITOR_UNIQUE_ID_REQUIRED);
  }
}
