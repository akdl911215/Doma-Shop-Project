import { BaseOutputDto } from '../../../common/outbound/dtos/base.output.dto';

export class UsersDeleteAdaptorOutputDto extends BaseOutputDto<{
  readonly delete: boolean;
}> {}
