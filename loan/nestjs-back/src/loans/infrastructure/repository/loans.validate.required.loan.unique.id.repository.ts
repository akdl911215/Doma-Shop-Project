import { Dependencies, Injectable } from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansValidateRequiredLoanUniqueIdAdaptor } from "../../domain/adaptor/loans.validate.required.loan.unique.id.adaptor";
import { LoansValidateRequiredLoanUniqueIdAdaptorInputDto } from "../../inbound/dtos/loans.validate.required.loan.unique.id.adaptor.input.dto";
import { LoansValidateRequiredLoanUniqueIdAdaptorOutputDto } from "../../outbound/dtos/loans.validate.required.loan.unique.id.adaptor.output.dto";

@Injectable()
@Dependencies([PrismaService])
export class LoansValidateRequiredLoanUniqueIdRepository
  implements LoansValidateRequiredLoanUniqueIdAdaptor
{
  constructor(private readonly prisma: PrismaService) {}

  public async validateRequiredLoanUniqueId(
    dto: LoansValidateRequiredLoanUniqueIdAdaptorInputDto
  ): Promise<LoansValidateRequiredLoanUniqueIdAdaptorOutputDto> {
    const { id } = dto;

    const searchLoan = await this.prisma.loans.findUnique({ where: { id } });
    return { response: searchLoan };
  }
}
