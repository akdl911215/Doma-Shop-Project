import { BaseOutputDto } from "../../../common/dtos/base.output.dto";

export class UsersExistsAdaptorOutputDto extends BaseOutputDto<{
  readonly accountId: string;
  readonly phone: string;
  readonly nickname: string;
}> {}
