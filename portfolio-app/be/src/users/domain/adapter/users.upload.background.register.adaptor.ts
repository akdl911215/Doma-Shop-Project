import { UsersUploadBackgroundRegisterAdaptorOutputDto } from '../../outbound/dtos/users.upload.background.register.adaptor.output.dto';
import { UsersUploadBackgroundRegisterAdaptorInputDto } from '../../inbound/dtos/users.upload.background.register.adaptor.input.dto';

export interface UsersUploadBackgroundRegisterAdaptor {
  readonly register: (
    dto: UsersUploadBackgroundRegisterAdaptorInputDto,
  ) => Promise<UsersUploadBackgroundRegisterAdaptorOutputDto>;
}
