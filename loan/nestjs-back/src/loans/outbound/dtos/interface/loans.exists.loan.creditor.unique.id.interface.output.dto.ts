import { BaseOutputDto } from "../../../../_common/dtos/base.output.dto";

export class LoansExistsLoanCreditorUniqueIdInterfaceOutputDto extends BaseOutputDto<{
  readonly existsLoanCreditorUniqueId: boolean;
}> {}
