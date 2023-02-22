import { BaseOutputDto } from "../../../common/dtos/base.output.dto";

export class LoanListAdaptorOutputDto extends BaseOutputDto<{
  readonly resultPage: number;
  readonly resultTotalPage: number;
  readonly currentList: [];
}> {}
