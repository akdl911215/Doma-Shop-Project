import { UsersLogoutAdaptorOutputDto } from "../../outbound/dtos/users.logout.adaptor.output.dto";
import { UsersLogoutAdaptorInputDto } from "../../inbound/dtos/users.logout.adaptor.input.dto";
import { PrismaService } from "../../../common/infrastructures/prisma/prisma.service";
import { UsersLogoutAdaptor } from "../../domain/adaptor/users.logout.adaptor";
export declare class UsersLogoutRepository implements UsersLogoutAdaptor {
    private readonly prisma;
    constructor(prisma: PrismaService);
    logout(dto: UsersLogoutAdaptorInputDto): Promise<UsersLogoutAdaptorOutputDto>;
}
