import { BaseOutputDto } from "../../../../_common/dtos/base.output.dto";

export class UsersExistsUserIdInterfaceOutputDto extends BaseOutputDto<{
  readonly usersExistsFoundByUserId: boolean;
}> {}
