import { IsNotEmpty } from 'class-validator';
import { UsersModel } from '../../../../../../users/domain/entity/users.model';

export class UsersUploadProfileRegisterAwsS3AdaptorInputDto {
  @IsNotEmpty()
  public user!: UsersModel;

  @IsNotEmpty()
  public file!: Express.Multer.File;
}
