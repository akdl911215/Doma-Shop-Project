import { PickType } from '@nestjs/swagger';
import { UsersBaseDto } from './users.base.dto';
import { BaseOutputDto } from '../../common/dtos/base.output.dto';

export class LoginInputUser extends PickType(UsersBaseDto, [
  'noteId',
  'password',
] as const) {}

export class LoginOutputUser extends BaseOutputDto<
  UsersBaseDto & { readonly accessToken: string; readonly refreshToken: string }
> {}
