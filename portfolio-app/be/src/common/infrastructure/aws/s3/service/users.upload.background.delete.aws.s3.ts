import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { UsersUploadBackgroundDeleteAwsS3Adaptor } from '../adapter/users.upload.background.delete.aws.s3.adaptor';
import { UsersUploadBackgroundDeleteAwsS3AdaptorInputDto } from '../inbound/dtos/users.upload.background.delete.aws.s3.adaptor.input.dto';
import { UsersUploadBackgroundDeleteAwsS3AdaptorOutputDto } from '../outbound/dtos/users.upload.background.delete.aws.s3.adaptor.output.dto';
import { S3 } from 'aws-sdk';
import { ConfigService } from '@nestjs/config';
import { NOT_ALREADY_EXIST_BACKGROUND_IMAGE } from '../../../../constants/http/errors/400';

@Injectable()
export class UsersUploadBackgroundDeleteAwsS3
  implements UsersUploadBackgroundDeleteAwsS3Adaptor
{
  constructor(
    @Inject('S3_BUCKET') private readonly s3: S3,
    private readonly configService: ConfigService,
  ) {}

  public async delete(
    dto: UsersUploadBackgroundDeleteAwsS3AdaptorInputDto,
  ): Promise<UsersUploadBackgroundDeleteAwsS3AdaptorOutputDto> {
    const {
      user: { backImage },
    } = dto;

    if (backImage === null)
      throw new BadRequestException(NOT_ALREADY_EXIST_BACKGROUND_IMAGE);

    const param = {
      Bucket: this.configService.get<string>('AWS_S3_BUCKET_NAME'),
      Key: `back${backImage.split('back')[1]}`,
    };

    await this.s3.deleteObject(param).promise();

    return { response: { delete: true } };
  }
}
