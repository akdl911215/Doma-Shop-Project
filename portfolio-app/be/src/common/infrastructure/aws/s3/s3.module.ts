import { Module } from '@nestjs/common';
import { s3Factory } from './global.S3Factory.module';
import { UsersUploadBackgroundRegisterAwsS3 } from './service/users.upload.background.register.aws.s3';
import { UsersUploadBackgroundDeleteAwsS3 } from './service/users.upload.background.delete.aws.s3';
import { UsersUploadProfileRegisterAwsS3 } from './service/users.upload.profile.register.aws.s3';
import { UsersUploadProfileDeleteAwsS3 } from './service/users.upload.profile.delete.aws.s3';

@Module({
  imports: [],
  providers: [
    s3Factory,
    {
      provide: 'S3_BACKGROUND_REGISTER',
      useClass: UsersUploadBackgroundRegisterAwsS3,
    },
    {
      provide: 'S3_BACKGROUND_DELETE',
      useClass: UsersUploadBackgroundDeleteAwsS3,
    },
    {
      provide: 'S3_PROFILE_REGISTER',
      useClass: UsersUploadProfileRegisterAwsS3,
    },
    {
      provide: 'S3_PROFILE_DELETE',
      useClass: UsersUploadProfileDeleteAwsS3,
    },
  ],
  exports: [
    {
      provide: 'S3_BACKGROUND_REGISTER',
      useClass: UsersUploadBackgroundRegisterAwsS3,
    },
    {
      provide: 'S3_BACKGROUND_DELETE',
      useClass: UsersUploadBackgroundDeleteAwsS3,
    },
    {
      provide: 'S3_PROFILE_REGISTER',
      useClass: UsersUploadProfileRegisterAwsS3,
    },
    {
      provide: 'S3_PROFILE_DELETE',
      useClass: UsersUploadProfileDeleteAwsS3,
    },
  ],
})
export class S3Module {}
