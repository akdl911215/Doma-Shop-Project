import { IsNotEmpty, IsString } from 'class-validator';
import { UsersModel } from '../../domain/entity/users.model';

export class UsersUploadProfileRegisterAdaptorInputDto {
  @IsNotEmpty()
  public user!: UsersModel;

  @IsNotEmpty()
  public file!: Express.Multer.File;

  @IsString()
  public fileLocation?: string;
}
