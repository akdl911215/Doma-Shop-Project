import { ApiProperty, PartialType, PickType } from '@nestjs/swagger';
import { UsersModel } from '../../domain/entity/users.model';
import { IsString, Matches } from 'class-validator';

export class UsersUpdateAdaptorInputDto extends PartialType(
  PickType(UsersModel, ['phone']),
) {
  @IsString()
  @ApiProperty({
    type: String,
    required: false,
    default: '',
  })
  public accountId?: string;
  @IsString()
  @ApiProperty({
    type: String,
    required: false,
    format: 'password',
  })
  public password?: string;

  @ApiProperty({ type: String, required: false, format: 'password' })
  public confirmPassword?: string;
}
