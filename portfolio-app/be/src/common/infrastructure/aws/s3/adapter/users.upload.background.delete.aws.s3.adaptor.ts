import { UsersUploadBackgroundDeleteAwsS3AdaptorInputDto } from '../inbound/dtos/users.upload.background.delete.aws.s3.adaptor.input.dto';
import { UsersUploadBackgroundDeleteAwsS3AdaptorOutputDto } from '../outbound/dtos/users.upload.background.delete.aws.s3.adaptor.output.dto';

export interface UsersUploadBackgroundDeleteAwsS3Adaptor {
  readonly delete: (
    dto: UsersUploadBackgroundDeleteAwsS3AdaptorInputDto,
  ) => Promise<UsersUploadBackgroundDeleteAwsS3AdaptorOutputDto>;
}
