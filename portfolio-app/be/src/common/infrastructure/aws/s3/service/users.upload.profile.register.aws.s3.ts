import { Inject, Injectable } from '@nestjs/common';
import { UsersUploadProfileRegisterAwsS3Adaptor } from '../adapter/users.upload.profile.register.aws.s3.adaptor';
import { UsersUploadProfileRegisterAwsS3AdaptorInputDto } from '../inbound/dtos/users.upload.profile.register.aws.s3.adaptor.input.dto';
import { UsersUploadProfileRegisterAwsS3AdaptorOutputDto } from '../outbound/dtos/users.upload.profile.register.aws.s3.adaptor.output.dto';
import { S3 } from 'aws-sdk';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersUploadProfileRegisterAwsS3
  implements UsersUploadProfileRegisterAwsS3Adaptor
{
  constructor(
    @Inject('S3_BUCKET') private readonly s3: S3,
    private readonly configService: ConfigService,
  ) {}

  public async register(
    dto: UsersUploadProfileRegisterAwsS3AdaptorInputDto,
  ): Promise<UsersUploadProfileRegisterAwsS3AdaptorOutputDto> {
    const { user, file } = dto;
    if (user.profileImage !== null) {
      const param = {
        Bucket: this.configService.get<string>('AWS_S3_BUCKET_NAME'),
        Key: `profile${user.profileImage.split('profile')[1]}`,
      };
      await this.s3.deleteObject(param).promise();
    }
    const param = {
      Bucket: this.configService.get<string>('AWS_S3_BUCKET_NAME'),
      ACL: this.configService.get<string>('AWS_S3_ACL'),
      Key: `profile/${user.id}/${Date.now()}`,
      Body: file.buffer,
    };
    const { Location } = await this.s3.upload(param).promise();

    return { response: { fileLocation: Location } };
  }
}
