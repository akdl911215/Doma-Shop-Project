import { Inject, Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { ConfigService } from '@nestjs/config';
import { UsersUploadBackgroundRegisterAwsS3Adaptor } from '../adapter/users.upload.background.register.aws.s3.adaptor';
import { UsersUploadBackgroundRegisterAwsS3AdaptorInputDto } from '../inbound/dtos/users.upload.background.register.aws.s3.adaptor.input.dto';
import { UsersUploadBackgroundRegisterAwsS3AdaptorOutputDto } from '../outbound/dtos/users.upload.background.register.aws.s3.adaptor.output.dto';

@Injectable()
export class UsersUploadBackgroundRegisterAwsS3
  implements UsersUploadBackgroundRegisterAwsS3Adaptor
{
  constructor(
    @Inject('S3_BUCKET') private readonly s3: S3,
    private readonly configService: ConfigService,
  ) {}

  public async register(
    dto: UsersUploadBackgroundRegisterAwsS3AdaptorInputDto,
  ): Promise<UsersUploadBackgroundRegisterAwsS3AdaptorOutputDto> {
    const { user, file } = dto;
    if (user.backImage !== null) {
      const param = {
        Bucket: this.configService.get<string>('AWS_S3_BUCKET_NAME'),
        Key: `back${user.backImage.split('back')[1]}`,
      };
      await this.s3.deleteObject(param).promise();
    }
    const param = {
      Bucket: this.configService.get<string>('AWS_S3_BUCKET_NAME'),
      ACL: this.configService.get<string>('AWS_S3_ACL'),
      Key: `back/${user.id}/${Date.now()}`,
      Body: file.buffer,
    };
    const { Location } = await this.s3.upload(param).promise();

    return { response: { fileLocation: Location } };
  }
}
