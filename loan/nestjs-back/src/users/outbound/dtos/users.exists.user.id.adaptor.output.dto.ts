import { BaseOutputDto } from "../../../common/dtos/base.output.dto";

export class UsersExistsUserIdAdaptorOutputDto extends BaseOutputDto<{
  readonly validateUserId: boolean;
}> {}
