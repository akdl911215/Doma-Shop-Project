import { UsersModel } from "../../domain/entity/users.model";
import { UsersProfileAdaptorOutputDto } from "../../outbound/dtos/users.profile.adaptor.output.dto";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { UsersProfileAdaptor } from "../../domain/adaptor/users.profile.adaptor";
export declare class UsersProfileRepository implements UsersProfileAdaptor {
    private readonly prisma;
    constructor(prisma: PrismaService);
    profile(dto: UsersModel): Promise<UsersProfileAdaptorOutputDto>;
}
