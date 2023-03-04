import { BadRequestException, Dependencies, Injectable } from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansValidateRequiredLoanUniqueIdInterface } from "../../domain/interface/loans.validate.required.loan.unique.id.interface";
import { LoansValidateRequiredLoanUniqueIdInterfaceInputDto } from "../../inbound/dtos/interface/loans.validate.required.loan.unique.id.interface.input.dto";
import { UNIQUE_ID_REQUIRED } from "../../../_common/constants/http/errors/400";

@Injectable()
@Dependencies([PrismaService])
export class LoansValidateRequiredLoanUniqueIdRepository
  implements LoansValidateRequiredLoanUniqueIdInterface
{
  public async validateRequiredLoanUniqueId(
    dto: LoansValidateRequiredLoanUniqueIdInterfaceInputDto
  ): Promise<void> {
    const { id } = dto;

    if (!id) throw new BadRequestException(UNIQUE_ID_REQUIRED);
  }
}
