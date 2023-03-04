import { BaseOutputDto } from "../../../../_common/dtos/base.output.dto";
import { Loans } from "@prisma/client";

export class LoansValidateRequiredLoanUniqueIdInterfaceOutputDto extends BaseOutputDto<Loans> {}
