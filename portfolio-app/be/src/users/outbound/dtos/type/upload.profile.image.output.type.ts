import { UsersModel } from '../../../domain/entity/users.model';

export type UploadProfileImageOutputType = Pick<UsersModel, 'profileImage'>;
