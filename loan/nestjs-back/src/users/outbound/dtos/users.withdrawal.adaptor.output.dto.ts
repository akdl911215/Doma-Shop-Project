import { BaseOutputDto } from "../../../common/dtos/base.output.dto";

export class UsersWithdrawalAdaptorOutputDto extends BaseOutputDto<{
  readonly delete: boolean;
}> {}
