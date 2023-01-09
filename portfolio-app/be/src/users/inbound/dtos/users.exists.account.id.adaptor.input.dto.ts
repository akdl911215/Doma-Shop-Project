import { PickType } from '@nestjs/swagger';
import { UsersModel } from '../../domain/entity/users.model';

export class UsersExistsAccountIdAdaptorInputDto extends PickType(UsersModel, [
  'investorId',
] as const) {}
