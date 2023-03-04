import { BaseOutputDto } from "../../../../_common/dtos/base.output.dto";
import { Loans } from "@prisma/client";

export class LoansListAdaptorOutputDto extends BaseOutputDto<{
  readonly resultPage: number;
  readonly resultTotalPage: number;
  readonly currentList: Loans[];
}> {}
