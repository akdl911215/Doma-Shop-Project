import { BaseOutputDto } from "../../../common/dtos/base.output.dto";

export class UsersLogoutAdaptorOutputDto extends BaseOutputDto<{
  readonly logout: boolean;
}> {}
