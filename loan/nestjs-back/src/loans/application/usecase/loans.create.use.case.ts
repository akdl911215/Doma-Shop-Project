import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { LoansCreateAdaptorOutputDto } from "../../outbound/dtos/adaptors/loans.create.adaptor.output.dto";
import {
  CREDITOR_ID_REQUIRED,
  CREDITOR_UNIQUE_ID_REQUIRED,
  DEBTOR_ID_REQUIRED,
  DEBTOR_UNIQUE_ID_REQUIRED,
  LOAN_INTEREST_REQUIRED,
  LOAN_REPAYMENT_DATE_REQUIRED,
  LOAN_TOTAL_AMOUNT_REQUIRED,
} from "../../../_common/constants/http/errors/400";
import { LoansCreateAdaptor } from "../../domain/adaptors/loans.create.adaptor";
import { LoansCreateAdaptorInputDto } from "../../inbound/dtos/adaptors/loans.create.adaptor.input.dto";
import {
  NOTFOUND_LOAN_CREDITOR,
  NOTFOUND_LOAN_DEBTOR,
} from "../../../_common/constants/http/errors/404";
import { UsersExistsUserInterface } from "../../domain/interfaces/users.exists.user.interface";

@Injectable()
export class LoansCreateUseCase implements LoansCreateAdaptor {
  constructor(
    @Inject("CREATE") private readonly repository: LoansCreateAdaptor,
    @Inject("USERS_EXISTS_FOUND_BY_USER")
    private readonly compareExistsDBUserWith: UsersExistsUserInterface
  ) {}

  public async create(
    dto: LoansCreateAdaptorInputDto
  ): Promise<LoansCreateAdaptorOutputDto> {
    const {
      creditorId,
      creditorUniqueId,
      debtorId,
      debtorUniqueId,
      totalAmountLoan,
      loanRepaymentDate,
      interest,
    } = dto;

    for (let i = 0; i < creditorUniqueId.length; ++i) {
      if (!creditorId[i]) throw new BadRequestException(CREDITOR_ID_REQUIRED);
      if (!creditorUniqueId[i])
        throw new BadRequestException(CREDITOR_UNIQUE_ID_REQUIRED);
      const {
        response: { existsUser: existsCreditor },
      } = await this.compareExistsDBUserWith.existsUser({
        id: creditorUniqueId[i],
        userId: creditorId[i],
      });
      if (!existsCreditor) throw new NotFoundException(NOTFOUND_LOAN_CREDITOR);
    }

    if (!debtorId) throw new BadRequestException(DEBTOR_ID_REQUIRED);
    if (!debtorUniqueId)
      throw new BadRequestException(DEBTOR_UNIQUE_ID_REQUIRED);
    const {
      response: { existsUser: existsDebtor },
    } = await this.compareExistsDBUserWith.existsUser({
      id: debtorUniqueId,
      userId: debtorId,
    });
    if (!existsDebtor) throw new NotFoundException(NOTFOUND_LOAN_DEBTOR);

    if (totalAmountLoan === 0)
      throw new BadRequestException(LOAN_TOTAL_AMOUNT_REQUIRED);

    if (!loanRepaymentDate)
      throw new BadRequestException(LOAN_REPAYMENT_DATE_REQUIRED);

    if (interest <= 0) throw new BadRequestException(LOAN_INTEREST_REQUIRED);

    return await this.repository.create(dto);
  }
}
