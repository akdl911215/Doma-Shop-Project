import { UsersDeleteAdaptorInputDto } from '../../inbound/dtos/users.delete.adaptor.input.dto';
import { UsersModel } from '../entity/users.model';
import { UsersDeleteAdaptorOutputDto } from '../../outbound/dtos/users.delete.adaptor.output.dto';

export interface UsersDeleteAdaptor {
  readonly delete: (dto: {
    requestUser: UsersDeleteAdaptorInputDto;
    user: UsersModel;
  }) => Promise<UsersDeleteAdaptorOutputDto>;
}
