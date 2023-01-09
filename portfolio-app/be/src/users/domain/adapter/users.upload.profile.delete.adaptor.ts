import { UsersUploadProfileDeleteAdaptorInputDto } from '../../inbound/dtos/users.upload.profile.delete.adaptor.input.dto';
import { UsersUploadProfileDeleteAdaptorOutputDto } from '../../outbound/dtos/users.upload.profile.delete.adaptor.output.dto';

export interface UsersUploadProfileDeleteAdaptor {
  readonly delete: (
    dto: UsersUploadProfileDeleteAdaptorInputDto,
  ) => Promise<UsersUploadProfileDeleteAdaptorOutputDto>;
}
