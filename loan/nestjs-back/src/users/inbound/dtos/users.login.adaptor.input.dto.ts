import { PickType } from '@nestjs/swagger';
import { UsersModel } from '../../domain/entity/users.model';

export class UsersLoginAdaptorInputDto extends PickType(UsersModel, [
  'userId',
  'password',
] as const) {}


