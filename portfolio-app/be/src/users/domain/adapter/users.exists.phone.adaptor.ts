import { UsersExistsPhoneAdaptorInputDto } from '../../inbound/dtos/users.exists.phone.adaptor.input.dto';
import { UsersExistsPhoneAdaptorOutputDto } from '../../outbound/dtos/users.exists.phone.adaptor.output.dto';

export interface UsersExistsPhoneAdaptor {
  readonly existsPhone: (
    dto: UsersExistsPhoneAdaptorInputDto,
  ) => Promise<UsersExistsPhoneAdaptorOutputDto>;
}
