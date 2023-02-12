import { BaseOutputDto } from "../../../common/dtos/base.output.dto";

export class UsersExistsPhoneAdaptorOutputDto extends BaseOutputDto<{
  readonly validatePhone: boolean;
}> {}
