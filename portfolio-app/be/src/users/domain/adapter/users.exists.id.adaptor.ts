import { UsersExistsIdAdaptorInputDto } from '../../inbound/dtos/users.exists.id.adaptor.input.dto';
import { UsersExistsIdAdaptorOutputDto } from '../../outbound/dtos/users.exists.id.adaptor.output.dto';

export interface UsersExistsIdAdaptor {
  readonly existsId: (
    dto: UsersExistsIdAdaptorInputDto,
  ) => Promise<UsersExistsIdAdaptorOutputDto>;
}
