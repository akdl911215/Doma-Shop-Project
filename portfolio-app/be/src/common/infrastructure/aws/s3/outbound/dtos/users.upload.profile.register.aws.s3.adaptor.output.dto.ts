import { BaseOutputDto } from '../../../../../outbound/dtos/base.output.dto';

export class UsersUploadProfileRegisterAwsS3AdaptorOutputDto extends BaseOutputDto<{
  readonly fileLocation: string;
}> {}
