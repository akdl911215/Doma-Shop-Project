import { UsersUpdateAdaptorInputDto } from '../../inbound/dtos/users.update.adaptor.input.dto';
import { UsersModel } from '../entity/users.model';
import { UsersUpdateAdaptorOutputDto } from '../../outbound/dtos/users.update.adaptor.output.dto';

export interface UsersUpdateAdaptor {
  readonly update: (dto: {
    requestUser: UsersUpdateAdaptorInputDto;
    user: UsersModel;
  }) => Promise<UsersUpdateAdaptorOutputDto>;
}
