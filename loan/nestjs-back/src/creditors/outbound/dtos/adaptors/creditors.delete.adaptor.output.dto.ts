import { BaseOutputDto } from "../../../../_common/dtos/base.output.dto";

export class CreditorsDeleteAdaptorOutputDto extends BaseOutputDto<{
  readonly creditorsErase: boolean;
}> {}
