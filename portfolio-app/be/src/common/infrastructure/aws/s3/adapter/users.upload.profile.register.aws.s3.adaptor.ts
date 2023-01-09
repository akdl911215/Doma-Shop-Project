import { UsersUploadProfileRegisterAwsS3AdaptorOutputDto } from '../outbound/dtos/users.upload.profile.register.aws.s3.adaptor.output.dto';
import { UsersUploadProfileRegisterAwsS3AdaptorInputDto } from '../inbound/dtos/users.upload.profile.register.aws.s3.adaptor.input.dto';

export interface UsersUploadProfileRegisterAwsS3Adaptor {
  readonly register: (
    dto: UsersUploadProfileRegisterAwsS3AdaptorInputDto,
  ) => Promise<UsersUploadProfileRegisterAwsS3AdaptorOutputDto>;
}
