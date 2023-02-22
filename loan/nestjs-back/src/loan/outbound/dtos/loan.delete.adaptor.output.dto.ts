import { BaseOutputDto } from "../../../common/dtos/base.output.dto";

export class LoanDeleteAdaptorOutputDto extends BaseOutputDto<{
  readonly loanRemove: boolean;
}> {}
