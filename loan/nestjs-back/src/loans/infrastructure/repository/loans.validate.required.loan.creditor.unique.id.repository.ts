import { Dependencies, Injectable } from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansValidateRequiredLoanCreditorUniqueIdAdaptor } from "../../domain/adaptor/loans.validate.required.loan.creditor.unique.id.adaptor";
import { LoansValidateRequiredLoanCreditorUniqueIdAdaptorInputDto } from "../../inbound/dtos/loans.validate.required.loan.creditor.unique.id.adaptor.input.dto";
import { LoansValidateRequiredLoanCreditorUniqueIdAdaptorOutputDto } from "../../outbound/dtos/loans.validate.required.loan.creditor.unique.id.adaptor.output.dto";

@Injectable()
@Dependencies([PrismaService])
export class LoansValidateRequiredLoanCreditorUniqueIdRepository
  implements LoansValidateRequiredLoanCreditorUniqueIdAdaptor
{
  constructor(private readonly prisma: PrismaService) {}

  public async validateRequiredLoanCreditorUniqueId(
    dto: LoansValidateRequiredLoanCreditorUniqueIdAdaptorInputDto
  ): Promise<LoansValidateRequiredLoanCreditorUniqueIdAdaptorOutputDto> {
    const { creditorUniqueId } = dto;

    const searchLoan = await this.prisma.loans.findFirst({
      where: { creditorUniqueId },
    });
    return { response: searchLoan };
  }
}
