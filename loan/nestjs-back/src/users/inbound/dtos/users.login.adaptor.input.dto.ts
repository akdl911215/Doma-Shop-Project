import { PickType } from '@nestjs/swagger';
import { UsersBaseDto } from '../../domain/entity/users.base.dto';

export class UsersLoginAdaptorInputDto extends PickType(UsersBaseDto, [
  'userId',
  'password',
] as const) {}


