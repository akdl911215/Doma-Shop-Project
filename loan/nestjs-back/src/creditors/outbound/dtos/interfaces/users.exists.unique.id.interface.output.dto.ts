import { BaseOutputDto } from "../../../../_common/dtos/base.output.dto";

export class UsersExistsUniqueIdInterfaceOutputDto extends BaseOutputDto<{
  readonly userExistsFoundByUniqueId: boolean;
}> {}
