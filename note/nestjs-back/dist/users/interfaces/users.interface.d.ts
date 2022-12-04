import { RegisterInputUser, RegisterOutputUser } from '../dtos/users.register.dto';
import { DeleteInputUser, DeleteOutputUser } from '../dtos/users.delete.dto';
import { FindInputUser, FindOutputUser } from '../dtos/users.find.dto';
import { LoginInputUser, LoginOutputUser } from '../dtos/users.login.dto';
import { UpdateInputUser, UpdateOutputUser } from '../dtos/users.update.dto';
export interface UsersInterface {
    readonly register: (dto: RegisterInputUser) => Promise<RegisterOutputUser>;
    readonly delete: (dto: DeleteInputUser) => Promise<DeleteOutputUser>;
    readonly find: (dto: FindInputUser) => Promise<FindOutputUser>;
    readonly login: (dto: LoginInputUser) => Promise<LoginOutputUser>;
    readonly update: (dto: UpdateInputUser) => Promise<UpdateOutputUser>;
}
