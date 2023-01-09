import { BaseOutputDto } from '../../../common/outbound/dtos/base.output.dto';

export class UsersExistsAdaptorOutputDto extends BaseOutputDto<{
  readonly accountId: string;
  readonly phone: string;
}> {}
