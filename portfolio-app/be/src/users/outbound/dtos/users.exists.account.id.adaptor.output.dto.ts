import { BaseOutputDto } from '../../../common/outbound/dtos/base.output.dto';

export class UsersExistsAccountIdAdaptorOutputDto extends BaseOutputDto<{
  readonly accountId: boolean;
}> {}
