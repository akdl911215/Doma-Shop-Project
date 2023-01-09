import { UsersModel } from '../../domain/entity/users.model';
import { IsNotEmpty } from 'class-validator';

export class UsersRefreshTokenReIssuanceAdaptorInputDto {
  @IsNotEmpty()
  public user!: UsersModel;
}
