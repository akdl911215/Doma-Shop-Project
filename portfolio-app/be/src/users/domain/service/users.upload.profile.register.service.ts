import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersUploadProfileRegisterAdaptor } from '../adapter/users.upload.profile.register.adaptor';
import { UsersUploadProfileRegisterAdaptorInputDto } from '../../inbound/dtos/users.upload.profile.register.adaptor.input.dto';
import { UsersUploadProfileRegisterAdaptorOutputDto } from '../../outbound/dtos/users.upload.profile.register.adaptor.output.dto';
import { UNAUTHORIZED } from '../../../common/constants/http/errors/401';
import { NOTFOUND_FILE } from '../../../common/constants/http/errors/404';
import { UsersUploadProfileRegisterAwsS3Adaptor } from '../../../common/infrastructure/aws/s3/adapter/users.upload.profile.register.aws.s3.adaptor';
import { UsersExistsIdAdaptor } from '../adapter/users.exists.id.adaptor';

@Injectable()
export class UsersUploadProfileRegisterService
  implements UsersUploadProfileRegisterAdaptor
{
  constructor(
    @Inject('PROFILE_REGISTER')
    private readonly profile: UsersUploadProfileRegisterAdaptor,
    @Inject('S3_PROFILE_REGISTER')
    private readonly S3: UsersUploadProfileRegisterAwsS3Adaptor,
    @Inject('EXISTS_ID')
    private readonly search: UsersExistsIdAdaptor,
  ) {}

  public async register(
    dto: UsersUploadProfileRegisterAdaptorInputDto,
  ): Promise<UsersUploadProfileRegisterAdaptorOutputDto> {
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
      response: { profileImage },
    } = await this.profile.register({ user: searchUser, file, fileLocation });

    return { response: { profileImage } };
  }
}
