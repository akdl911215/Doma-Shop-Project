import { BaseOutputDto } from "../../../../_common/dtos/base.output.dto";

export class UsersExistsUserInterfaceOutputDto extends BaseOutputDto<{
  readonly existsUser: boolean;
}> {}
