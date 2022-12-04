import { UsersInterface } from "./interfaces/users.interface";
import { DeleteInputUser, DeleteOutputUser } from "./dtos/users.delete.dto";
import { FindInputUser, FindOutputUser } from "./dtos/users.find.dto";
import { LoginInputUser, LoginOutputUser } from "./dtos/users.login.dto";
import { RegisterInputUser, RegisterOutputUser } from "./dtos/users.register.dto";
import { UpdateInputUser, UpdateOutputUser } from "./dtos/users.update.dto";
import { PrismaService } from "../prisma.service";
export declare class UsersService implements UsersInterface {
    private readonly prisma;
    constructor(prisma: PrismaService);
    register({ noteId: userNoteId, phone: userPhone, }: RegisterInputUser): Promise<RegisterOutputUser>;
    delete({ id }: DeleteInputUser): Promise<DeleteOutputUser>;
    find({ id }: FindInputUser): Promise<FindOutputUser>;
    login({ noteId, password }: LoginInputUser): Promise<LoginOutputUser>;
    update(dto: UpdateInputUser): Promise<UpdateOutputUser>;
}
