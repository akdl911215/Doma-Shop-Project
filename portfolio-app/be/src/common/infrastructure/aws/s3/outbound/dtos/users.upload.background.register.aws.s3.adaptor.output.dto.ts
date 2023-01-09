import { BaseOutputDto } from '../../../../../outbound/dtos/base.output.dto';

export class UsersUploadBackgroundRegisterAwsS3AdaptorOutputDto extends BaseOutputDto<{
  readonly fileLocation: string;
}> {}
