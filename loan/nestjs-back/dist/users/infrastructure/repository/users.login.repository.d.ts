import { UsersLoginAdaptorInputDto } from "../../inbound/dtos/users.login.adaptor.input.dto";
import { UsersLoginAdaptorOutputDto } from "../../outbound/dtos/users.login.adaptor.output.dto";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { TokenService } from "../../../_common/infrastructures/token/token.service";
import { UsersLoginAdaptor } from "../../domain/adaptor/users.login.adaptor";
import { HashDecodedService } from "../bcrypt/hash.decoded.service";
export declare class UsersLoginRepository implements UsersLoginAdaptor {
    private readonly prisma;
    private readonly compare;
    private readonly jwtToken;
    constructor(prisma: PrismaService, compare: HashDecodedService, jwtToken: TokenService);
    login({ userId, password, }: UsersLoginAdaptorInputDto): Promise<UsersLoginAdaptorOutputDto>;
}
