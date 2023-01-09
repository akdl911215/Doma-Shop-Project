import { ApiProperty, PickType } from '@nestjs/swagger';
import { UsersModel } from '../../domain/entity/users.model';

export class UsersRegisterAdaptorInputDto extends PickType(UsersModel, [
  'investorId',
  'password',
  'phone',
  'isMarketing',
] as const) {
  @ApiProperty({ type: String, required: true, format: 'password' })
  public confirmPassword!: string;
}
