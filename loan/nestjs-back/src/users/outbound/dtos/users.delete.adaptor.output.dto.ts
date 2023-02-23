import { BaseOutputDto } from "../../../_common/dtos/base.output.dto";

export class UsersDeleteAdaptorOutputDto extends BaseOutputDto<{
  readonly delete: boolean;
}> {}
