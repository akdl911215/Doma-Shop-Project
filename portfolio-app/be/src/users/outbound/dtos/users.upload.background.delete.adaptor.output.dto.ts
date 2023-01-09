import { BaseOutputDto } from '../../../common/outbound/dtos/base.output.dto';

export class UsersUploadBackgroundDeleteAdaptorOutputDto extends BaseOutputDto<{
  readonly delete: boolean;
}> {}
