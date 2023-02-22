import { Loans } from "@prisma/client";
import { BaseOutputDto } from "../../../common/dtos/base.output.dto";

export class LoanCreateAdaptorOutputDto extends BaseOutputDto<Loans> {}
