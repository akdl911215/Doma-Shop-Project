import { BaseOutputDto } from "../../../common/dtos/base.output.dto";

export class UsersExistsUserIdOutputDto extends BaseOutputDto<{
  readonly validateUserId: boolean;
}> {}
