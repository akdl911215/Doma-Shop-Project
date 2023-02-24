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
      creditor,
      creditorId,
      debtor,
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
            creditorId,
          },
          {
            debtorId,
          },
        ],
      },
    });
    if (!loan) throw new NotFoundException(NOTFOUND_LOAN);

    const updateCreditor: string = creditor === "" ? loan.creditor : creditor;
    const updateCreditorId: string =
      creditorId === "" ? loan.creditorId : creditorId;
    const updateDebtor: string = debtor === "" ? loan.debtor : debtor;
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
            creditor: updateCreditor,
            creditorId: updateCreditorId,
            debtor: updateDebtor,
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
