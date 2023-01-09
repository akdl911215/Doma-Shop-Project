import { UsersUploadProfileDeleteAwsS3AdaptorInputDto } from '../inbound/dtos/users.upload.profile.delete.aws.s3.adaptor.input.dto';
import { UsersUploadProfileDeleteAwsS3AdaptorOutputDto } from '../outbound/dtos/users.upload.profile.delete.aws.s3.adaptor.output.dto';

export interface UsersUploadProfileDeleteAwsS3Adaptor {
  readonly delete: (
    dto: UsersUploadProfileDeleteAwsS3AdaptorInputDto,
  ) => Promise<UsersUploadProfileDeleteAwsS3AdaptorOutputDto>;
}
