import { IsNotEmpty } from 'class-validator';
import { UsersModel } from '../../../../../../users/domain/entity/users.model';

export class UsersUploadProfileDeleteAwsS3AdaptorInputDto {
  @IsNotEmpty()
  public user!: UsersModel;
}
