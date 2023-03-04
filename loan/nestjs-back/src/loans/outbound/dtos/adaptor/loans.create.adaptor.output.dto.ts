import { Loans } from "@prisma/client";
import { BaseOutputDto } from "../../../../_common/dtos/base.output.dto";

export class LoansCreateAdaptorOutputDto extends BaseOutputDto<Loans> {}
