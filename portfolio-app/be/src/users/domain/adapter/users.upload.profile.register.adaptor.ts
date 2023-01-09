import { UsersUploadProfileRegisterAdaptorInputDto } from '../../inbound/dtos/users.upload.profile.register.adaptor.input.dto';
import { UsersUploadProfileRegisterAdaptorOutputDto } from '../../outbound/dtos/users.upload.profile.register.adaptor.output.dto';

export interface UsersUploadProfileRegisterAdaptor {
  readonly register: (
    dto: UsersUploadProfileRegisterAdaptorInputDto,
  ) => Promise<UsersUploadProfileRegisterAdaptorOutputDto>;
}
