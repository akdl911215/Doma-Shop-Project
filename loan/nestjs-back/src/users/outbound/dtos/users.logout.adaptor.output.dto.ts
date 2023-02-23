import { BaseOutputDto } from "../../../_common/dtos/base.output.dto";

export class UsersLogoutAdaptorOutputDto extends BaseOutputDto<{
  readonly logout: boolean;
}> {}
