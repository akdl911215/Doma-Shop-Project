import { BaseOutputDto } from "../../../_common/dtos/base.output.dto";

export class UsersExistsPhoneAdaptorOutputDto extends BaseOutputDto<{
  readonly validatePhone: boolean;
}> {}
