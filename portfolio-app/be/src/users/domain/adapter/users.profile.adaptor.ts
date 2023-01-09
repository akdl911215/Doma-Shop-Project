import { UsersModel } from '../entity/users.model';
import { UsersProfileAdaptorOutputDto } from '../../outbound/dtos/users.profile.adaptor.output.dto';

export interface UsersProfileAdaptor {
  readonly userProfile: (
    dto: UsersModel,
  ) => Promise<UsersProfileAdaptorOutputDto>;
}
