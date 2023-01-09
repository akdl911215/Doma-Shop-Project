import { UsersUploadBackgroundDeleteAdaptorOutputDto } from '../../outbound/dtos/users.upload.background.delete.adaptor.output.dto';
import { UsersUploadBackgroundDeleteAdaptorInputDto } from '../../inbound/dtos/users.upload.background.delete.adaptor.input.dto';

export interface UsersUploadBackgroundDeleteAdaptor {
  readonly delete: (
    dto: UsersUploadBackgroundDeleteAdaptorInputDto,
  ) => Promise<UsersUploadBackgroundDeleteAdaptorOutputDto>;
}
