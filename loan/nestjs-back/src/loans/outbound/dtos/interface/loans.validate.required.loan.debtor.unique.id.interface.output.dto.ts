import { BaseOutputDto } from "../../../../_common/dtos/base.output.dto";
import { Loans } from "@prisma/client";

export class LoansValidateRequiredLoanDebtorUniqueIdInterfaceOutputDto extends BaseOutputDto<Loans> {}
