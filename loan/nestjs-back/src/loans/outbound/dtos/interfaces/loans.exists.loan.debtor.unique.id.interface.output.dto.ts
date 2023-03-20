import { BaseOutputDto } from "../../../../_common/dtos/base.output.dto";

export class LoansExistsLoanDebtorUniqueIdInterfaceOutputDto extends BaseOutputDto<{
  readonly existsLoanDebtorUniqueId: boolean;
}> {}
