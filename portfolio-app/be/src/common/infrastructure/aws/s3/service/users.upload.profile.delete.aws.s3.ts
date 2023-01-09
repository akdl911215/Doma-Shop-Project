import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { UsersUploadProfileDeleteAwsS3Adaptor } from '../adapter/users.upload.profile.delete.aws.s3.adaptor';
import { UsersUploadProfileDeleteAwsS3AdaptorInputDto } from '../inbound/dtos/users.upload.profile.delete.aws.s3.adaptor.input.dto';
import { UsersUploadProfileDeleteAwsS3AdaptorOutputDto } from '../outbound/dtos/users.upload.profile.delete.aws.s3.adaptor.output.dto';
import { S3 } from 'aws-sdk';
import { ConfigService } from '@nestjs/config';
import { NOT_ALREADY_EXIST_PROFILE_IMAGE } from '../../../../constants/http/errors/400';

@Injectable()
export class UsersUploadProfileDeleteAwsS3
  implements UsersUploadProfileDeleteAwsS3Adaptor
{
  constructor(
    @Inject('S3_BUCKET') private readonly s3: S3,
    private readonly configService: ConfigService,
  ) {}

  public async delete(
    dto: UsersUploadProfileDeleteAwsS3AdaptorInputDto,
  ): Promise<UsersUploadProfileDeleteAwsS3AdaptorOutputDto> {
    const {
      user: { profileImage },
    } = dto;

    if (profileImage === null)
      throw new BadRequestException(NOT_ALREADY_EXIST_PROFILE_IMAGE);

    const param = {
      Bucket: this.configService.get<string>('AWS_S3_BUCKET_NAME'),
      Key: `profile${profileImage.split('profile')[1]}`,
    };
    await this.s3.deleteObject(param).promise();

    return { response: { delete: true } };
  }
}
