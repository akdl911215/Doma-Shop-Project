import { BaseOutputDto } from '../../../../../outbound/dtos/base.output.dto';

export class UsersUploadProfileDeleteAwsS3AdaptorOutputDto extends BaseOutputDto<{
  readonly delete: boolean;
}> {}
