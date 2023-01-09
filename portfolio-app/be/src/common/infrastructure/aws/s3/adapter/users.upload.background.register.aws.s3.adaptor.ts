import { UsersUploadBackgroundRegisterAwsS3AdaptorInputDto } from '../inbound/dtos/users.upload.background.register.aws.s3.adaptor.input.dto';
import { UsersUploadBackgroundRegisterAwsS3AdaptorOutputDto } from '../outbound/dtos/users.upload.background.register.aws.s3.adaptor.output.dto';

export interface UsersUploadBackgroundRegisterAwsS3Adaptor {
  readonly register: (
    dto: UsersUploadBackgroundRegisterAwsS3AdaptorInputDto,
  ) => Promise<UsersUploadBackgroundRegisterAwsS3AdaptorOutputDto>;
}
