import { PickType } from '@nestjs/swagger';
import { UsersModel } from '../../domain/entity/users.model';

export class UsersExistsAdaptorInputDto extends PickType(UsersModel, [
  'investorId',
  'phone',
] as const) {}
