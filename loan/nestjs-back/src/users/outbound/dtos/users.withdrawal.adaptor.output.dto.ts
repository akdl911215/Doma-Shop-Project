import { BaseOutputDto } from "../../../common/dtos/base.output.dto";

export class UsersWithdrawalAdaptorOutputDto extends BaseOutputDto<{
  readonly withdrawal: boolean;
}> {}
