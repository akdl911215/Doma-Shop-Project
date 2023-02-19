import { BaseOutputDto } from "../../../common/dtos/base.output.dto";

export class UsersDeleteAdaptorOutputDto extends BaseOutputDto<{
  readonly delete: boolean;
}> {}
