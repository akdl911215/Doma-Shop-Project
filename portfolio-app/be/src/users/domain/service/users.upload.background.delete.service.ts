import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UsersUploadBackgroundDeleteAdaptor } from '../adapter/users.upload.background.delete.adaptor';
import { UsersUploadBackgroundDeleteAdaptorOutputDto } from '../../outbound/dtos/users.upload.background.delete.adaptor.output.dto';
import { UsersUploadBackgroundDeleteAdaptorInputDto } from '../../inbound/dtos/users.upload.background.delete.adaptor.input.dto';
import { UsersUploadBackgroundDeleteAwsS3Adaptor } from '../../../common/infrastructure/aws/s3/adapter/users.upload.background.delete.aws.s3.adaptor';
import { NOTFOUND_USER } from '../../../common/constants/http/errors/404';
import { UsersExistsIdAdaptor } from '../adapter/users.exists.id.adaptor';

@Injectable()
export class UsersUploadBackgroundDeleteService
  implements UsersUploadBackgroundDeleteAdaptor
{
  constructor(
    @Inject('BACKGROUND_DELETE')
    private readonly background: UsersUploadBackgroundDeleteAdaptor,
    @Inject('S3_BACKGROUND_DELETE')
    private readonly S3: UsersUploadBackgroundDeleteAwsS3Adaptor,
    @Inject('EXISTS_ID')
    private readonly search: UsersExistsIdAdaptor,
  ) {}

  public async delete(
    dto: UsersUploadBackgroundDeleteAdaptorInputDto,
  ): Promise<UsersUploadBackgroundDeleteAdaptorOutputDto> {
    const { id } = dto;

    const {
      response: { user },
    } = await this.search.existsId({ id });
    if (!user) throw new NotFoundException(NOTFOUND_USER);

    const deleteBool = await this.S3.delete({ user });

    if (deleteBool) {
      await this.background.delete({ id });

      return { response: { delete: true } };
    }
  }
}
