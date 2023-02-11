import { UsersRegisterAdaptorInputDto } from "../../inbound/dtos/users.register.adaptor.input.dto";
import { UsersRegisterAdaptorOutputDto } from "../../outbound/dtos/users.register.adaptor.output.dto";
import { PrismaService } from "../../../common/infrastructures/prisma/prisma.service";
import { UsersRegisterAdaptor } from "../../domain/adaptor/users.register.adaptor";
import { HashEncodedService } from "../bcrypt/hash.encoded.service";
export declare class UsersRegisterRepository implements UsersRegisterAdaptor {
    private readonly hash;
    private readonly prisma;
    constructor(hash: HashEncodedService, prisma: PrismaService);
    register(dto: UsersRegisterAdaptorInputDto): Promise<UsersRegisterAdaptorOutputDto>;
}
