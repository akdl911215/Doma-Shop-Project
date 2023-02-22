import { BaseOutputDto } from "../../../common/dtos/base.output.dto";
import { Loans } from "@prisma/client";

export class LoanListAdaptorOutputDto extends BaseOutputDto<{
  readonly resultPage: number;
  readonly resultTotalPage: number;
  readonly currentList: Loans[];
}> {}
