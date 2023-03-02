import {
  Dependencies,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansUpdateAdaptorOutputDto } from "../../outbound/dtos/loans.update.adaptor.output.dto";
import { LoansUpdateAdaptor } from "../../domain/adaptor/loans.update.adaptor";
import { LoansUpdateAdaptorInputDto } from "../../inbound/dtos/loans.update.adaptor.input.dto";
import { NOTFOUND_LOAN } from "../../../_common/constants/http/errors/404";

@Injectable()
@Dependencies([PrismaService])
export class LoansUpdateRepository implements LoansUpdateAdaptor {
  constructor(private readonly prisma: PrismaService) {}

  public async update(
    dto: LoansUpdateAdaptorInputDto
  ): Promise<LoansUpdateAdaptorOutputDto> {
    const {
      id,
      creditorUniqueId,
      creditorId,
      debtorUniqueId,
      debtorId,
      totalAmountLoan,
      interest,
      loanRepaymentDate,
    } = dto;

    const loan = await this.prisma.loans.findFirst({
      where: {
        OR: [
          {
            id,
          },
          {
            creditorUniqueId,
          },
          {
            debtorUniqueId,
          },
        ],
      },
    });
    if (!loan) throw new NotFoundException(NOTFOUND_LOAN);

    const updateCreditorUniqueId: string =
      creditorUniqueId === "" ? loan.creditorUniqueId : creditorUniqueId;
    const updateCreditorId: string =
      creditorId === "" ? loan.creditorId : creditorId;
    const updateDebtorUniqueId: string =
      debtorUniqueId === "" ? loan.debtorUniqueId : debtorUniqueId;
    const updateDebtorId: string = debtorId === "" ? loan.debtorId : debtorId;
    const updateTotalAmountLoan: number =
      totalAmountLoan < 0 ? loan.totalAmountLoan : totalAmountLoan;
    const updateInterest: number = interest < 1 ? loan.interest : interest;
    const updateLoanRepaymentDate: string =
      loanRepaymentDate === "" ? loan.loanRepaymentDate : loanRepaymentDate;

    try {
      const [updateLoan] = await this.prisma.$transaction([
        this.prisma.loans.update({
          where: { id },
          data: {
            creditorUniqueId: updateCreditorUniqueId,
            creditorId: updateCreditorId,
            debtorUniqueId: updateDebtorUniqueId,
            debtorId: updateDebtorId,
            totalAmountLoan: updateTotalAmountLoan,
            interest: updateInterest,
            loanRepaymentDate: updateLoanRepaymentDate,
          },
        }),
      ]);

      return { response: updateLoan };
    } catch (e) {
      if (e instanceof InternalServerErrorException) {
        throw new InternalServerErrorException(e);
      } else {
        throw new Error(`${e}`);
      }
    }
  }
}
