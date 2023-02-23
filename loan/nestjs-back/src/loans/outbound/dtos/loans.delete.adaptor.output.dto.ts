import { BaseOutputDto } from "../../../_common/dtos/base.output.dto";

export class LoansDeleteAdaptorOutputDto extends BaseOutputDto<{
  readonly loanErase: boolean;
}> {}
