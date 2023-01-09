import { UsersModel } from '../../domain/entity/users.model';
import { IsNotEmpty, IsString } from 'class-validator';

export class UsersUploadBackgroundRegisterAdaptorInputDto {
  @IsNotEmpty()
  public user!: UsersModel;

  @IsNotEmpty()
  public file!: Express.Multer.File;

  @IsString()
  public fileLocation?: string;
}
