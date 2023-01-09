import { BaseOutputDto } from '../../../../../outbound/dtos/base.output.dto';

export class UsersUploadBackgroundDeleteAwsS3AdaptorOutputDto extends BaseOutputDto<{
  readonly delete: boolean;
}> {}
