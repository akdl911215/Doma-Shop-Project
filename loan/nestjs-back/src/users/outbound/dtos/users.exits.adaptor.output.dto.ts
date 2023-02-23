import { BaseOutputDto } from "../../../_common/dtos/base.output.dto";

export class UsersExistsAdaptorOutputDto extends BaseOutputDto<{
  readonly accountId: string;
  readonly phone: string;
  readonly nickname: string;
}> {}
