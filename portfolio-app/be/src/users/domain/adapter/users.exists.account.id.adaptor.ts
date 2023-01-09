import { UsersExistsAccountIdAdaptorInputDto } from '../../inbound/dtos/users.exists.account.id.adaptor.input.dto';
import { UsersExistsAccountIdAdaptorOutputDto } from '../../outbound/dtos/users.exists.account.id.adaptor.output.dto';

export interface UsersExistsAccountIdAdaptor {
  readonly existsAccountId: (
    dto: UsersExistsAccountIdAdaptorInputDto,
  ) => Promise<UsersExistsAccountIdAdaptorOutputDto>;
}
