import { BaseOutputDto } from "../../../../_common/dtos/base.output.dto";
import { Loans } from "@prisma/client";

export class LoansExistsLoanInterfaceOutputDto extends BaseOutputDto<Loans> {}
