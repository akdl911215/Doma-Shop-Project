import { BaseOutputDto } from '../../../common/outbound/dtos/base.output.dto';
import { UsersModel } from '../../domain/entity/users.model';

export class UsersFindByIdAdaptorOutputDto extends BaseOutputDto<UsersModel> {}
