import { BaseOutputDto } from '../../../common/outbound/dtos/base.output.dto';

export class UsersExistsPhoneAdaptorOutputDto extends BaseOutputDto<{
  readonly phone: boolean;
}> {}
