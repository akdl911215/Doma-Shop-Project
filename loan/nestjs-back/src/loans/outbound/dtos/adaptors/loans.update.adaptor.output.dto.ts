import { BaseOutputDto } from "../../../../_common/dtos/base.output.dto";
import { Loans } from "@prisma/client";

export class LoansUpdateAdaptorOutputDto extends BaseOutputDto<Loans> {}
