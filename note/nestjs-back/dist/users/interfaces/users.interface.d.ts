import { RegisterInputUser, RegisterOutputUser } from "../dtos/users.register.dto";
import { DeleteInputUser, DeleteOutputUser } from "../dtos/users.delete.dto";
import { FindInputUser, FindOutputUser } from "../dtos/users.find.dto";
import { LoginInputUser, LoginOutputUser } from "../dtos/users.login.dto";
import { UpdateInputUser, UpdateOutputUser } from "../dtos/users.update.dto";
import { UsersBaseDto } from "../dtos/users.base.dto";
export interface UsersInterface {
    readonly register: (dto: RegisterInputUser) => Promise<RegisterOutputUser>;
    readonly delete: (dto: {
        requestUser: DeleteInputUser;
        user: UsersBaseDto;
    }) => Promise<DeleteOutputUser>;
    readonly findOn: (dto: FindInputUser) => Promise<FindOutputUser>;
    readonly login: (dto: LoginInputUser) => Promise<LoginOutputUser>;
    readonly update: (dto: {
        requestUser: UpdateInputUser;
        user: UsersBaseDto;
    }) => Promise<UpdateOutputUser>;
}
