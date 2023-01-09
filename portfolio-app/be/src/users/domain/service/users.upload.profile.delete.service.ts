import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UsersUploadProfileDeleteAdaptor } from '../adapter/users.upload.profile.delete.adaptor';
import { UsersUploadProfileDeleteAdaptorInputDto } from '../../inbound/dtos/users.upload.profile.delete.adaptor.input.dto';
import { UsersUploadProfileDeleteAdaptorOutputDto } from '../../outbound/dtos/users.upload.profile.delete.adaptor.output.dto';
import { UsersUploadProfileDeleteAwsS3Adaptor } from '../../../common/infrastructure/aws/s3/adapter/users.upload.profile.delete.aws.s3.adaptor';
import { NOTFOUND_USER } from '../../../common/constants/http/errors/404';
import { UsersExistsIdAdaptor } from '../adapter/users.exists.id.adaptor';

@Injectable()
export class UsersUploadProfileDeleteService
  implements UsersUploadProfileDeleteAdaptor
{
  constructor(
    @Inject('PROFILE_DELETE')
    private readonly profile: UsersUploadProfileDeleteAdaptor,
    @Inject('S3_PROFILE_DELETE')
    private readonly S3: UsersUploadProfileDeleteAwsS3Adaptor,
    @Inject('EXISTS_ID')
    private readonly search: UsersExistsIdAdaptor,
  ) {}

  public async delete(
    dto: UsersUploadProfileDeleteAdaptorInputDto,
  ): Promise<UsersUploadProfileDeleteAdaptorOutputDto> {
    const { id } = dto;

    const {
      response: { user },
    } = await this.search.existsId({ id });
    if (!user) throw new NotFoundException(NOTFOUND_USER);

    const deleteBool = await this.S3.delete({ user });

    if (deleteBool) {
      await this.profile.delete({ id });

      return { response: { delete: true } };
    }
  }
}
