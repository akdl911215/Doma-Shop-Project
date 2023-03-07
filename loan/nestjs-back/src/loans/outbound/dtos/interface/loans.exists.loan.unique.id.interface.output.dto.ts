import { BaseOutputDto } from "../../../../_common/dtos/base.output.dto";

export class LoansExistsLoanUniqueIdInterfaceOutputDto extends BaseOutputDto<{
  readonly existsLoanUniqueId: boolean;
}> {}
