import { ApiProperty, PickType } from '@nestjs/swagger';
import { UsersBaseDto } from './users.base.dto';
import { IsString } from 'class-validator';
import { BaseOutputDto } from '../../common/dtos/base.output.dto';

export class RegisterInputUser extends PickType(UsersBaseDto, [
  'noteId',
  'password',
  'name',
  'address',
  'phone',
  'social',
] as const) {
  @IsString()
  @ApiProperty({ type: String, required: true, format: 'password' })
  private readonly confirmPassword!: string;
}

export class RegisterOutputUser extends BaseOutputDto<UsersBaseDto> {}
