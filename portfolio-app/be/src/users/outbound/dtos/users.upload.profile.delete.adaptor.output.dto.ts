import { BaseOutputDto } from '../../../common/outbound/dtos/base.output.dto';

export class UsersUploadProfileDeleteAdaptorOutputDto extends BaseOutputDto<{
  readonly delete: boolean;
}> {}
