import { BaseOutputDto } from "../../../common/dtos/base.output.dto";
import { Loans } from "@prisma/client";

export class LoanUpdateAdaptorOutputDto extends BaseOutputDto<Loans> {}
