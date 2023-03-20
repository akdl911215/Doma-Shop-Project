import { BaseOutputDto } from "../../../../_common/dtos/base.output.dto";
import { Creditors } from "@prisma/client";

export class CreditorsListAdaptorOutputDto extends BaseOutputDto<{
  readonly currentPage: number;
  readonly resultLastPAgeLeft: number;
  readonly resultTotalPage: number;
  readonly creditorsList: Creditors[];
}> {}
