import { PickType } from '@nestjs/swagger';
import { UsersBaseDto } from './users.base.dto';
import { BaseOutputDto } from '../../common/dtos/base.output.dto';

export class UpdateInputUser extends PickType(UsersBaseDto, [
  'password',
  'name',
  'address',
  'phone',
] as const) {}

export class UpdateOutputUser extends BaseOutputDto<UsersBaseDto> {}
