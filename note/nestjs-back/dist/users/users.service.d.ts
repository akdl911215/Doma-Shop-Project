import { Logger } from "@nestjs/common";
import { UsersInterface } from "./interfaces/users.interface";
import { DeleteInputUser, DeleteOutputUser } from "./dtos/users.delete.dto";
import { FindInputUser, FindOutputUser } from "./dtos/users.find.dto";
import { LoginInputUser, LoginOutputUser } from "./dtos/users.login.dto";
import { RegisterInputUser, RegisterOutputUser } from "./dtos/users.register.dto";
import { UpdateInputUser, UpdateOutputUser } from "./dtos/users.update.dto";
import { PrismaService } from "../prisma.service";
import { UsersBaseDto } from "./dtos/users.base.dto";
import { TokenService } from "../common/infrastructures/token/token.service";
import { BcriptDecodedInterface } from "../common/infrastructures/bcript/interfaces/bcript.decoded.interface";
import { BcriptIncodedInterface } from "../common/infrastructures/bcript/interfaces/bcript.incoded.interface";
export declare class UsersService implements UsersInterface {
    private readonly prisma;
    private readonly logger;
    private readonly hash;
    private readonly compare;
    private readonly jwtToken;
    constructor(prisma: PrismaService, logger: Logger, hash: BcriptIncodedInterface, compare: BcriptDecodedInterface, jwtToken: TokenService);
    register({ noteId: userNoteId, phone: userPhone, }: RegisterInputUser): Promise<RegisterOutputUser>;
    delete(dto: {
        requestUser: DeleteInputUser;
        user: UsersBaseDto;
    }): Promise<DeleteOutputUser>;
    findOn({ id }: FindInputUser): Promise<FindOutputUser>;
    login({ noteId, password, }: LoginInputUser): Promise<LoginOutputUser>;
    update(dto: {
        requestUser: UpdateInputUser;
        user: UsersBaseDto;
    }): Promise<UpdateOutputUser>;
}
