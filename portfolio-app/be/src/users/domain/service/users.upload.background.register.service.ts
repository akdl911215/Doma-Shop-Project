import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersUploadBackgroundRegisterAdaptorOutputDto } from '../../outbound/dtos/users.upload.background.register.adaptor.output.dto';
import { UsersUploadBackgroundRegisterAdaptor } from '../adapter/users.upload.background.register.adaptor';
import { UNAUTHORIZED } from '../../../common/constants/http/errors/401';
import { NOTFOUND_FILE } from '../../../common/constants/http/errors/404';
import { UsersUploadBackgroundRegisterAwsS3Adaptor } from '../../../common/infrastructure/aws/s3/adapter/users.upload.background.register.aws.s3.adaptor';
import { UsersUploadBackgroundRegisterAdaptorInputDto } from '../../inbound/dtos/users.upload.background.register.adaptor.input.dto';
import { UsersExistsIdAdaptor } from '../adapter/users.exists.id.adaptor';

@Injectable()
export class UsersUploadBackgroundRegisterService
  implements UsersUploadBackgroundRegisterAdaptor
{
  constructor(
    @Inject('BACKGROUND_REGISTER')
    private readonly background: UsersUploadBackgroundRegisterAdaptor,
    @Inject('S3_BACKGROUND_REGISTER')
    private readonly S3: UsersUploadBackgroundRegisterAwsS3Adaptor,
    @Inject('EXISTS_ID')
    private readonly search: UsersExistsIdAdaptor,
  ) {}

  public async register(
    dto: UsersUploadBackgroundRegisterAdaptorInputDto,
  ): Promise<UsersUploadBackgroundRegisterAdaptorOutputDto> {
    const { user, file } = dto;
    if (user === undefined) throw new UnauthorizedException(UNAUTHORIZED);
    if (file === undefined) throw new NotFoundException(NOTFOUND_FILE);

    const {
      response: { user: searchUser },
    } = await this.search.existsId({ id: user.id });

    const {
      response: { fileLocation },
    } = await this.S3.register({ user, file });

    const {
      response: { backImage },
    } = await this.background.register({
      user: searchUser,
      file,
      fileLocation,
    });

    return { response: { backImage } };
  }
}
