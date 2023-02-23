import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { UsersUpdateUserIdAdaptor } from "../../domain/adaptor/users.update.user.id.adaptor";
import { UsersUpdateUserIdAdaptorInputDto } from "../../inbound/dtos/users.update.user.id.adaptor.input.dto";
import { UsersUpdateUserIdAdaptorOutputDto } from "../../outbound/dtos/users.update.user.id.adaptor.output.dto";
export declare class UsersUpdateUserIdRepository implements UsersUpdateUserIdAdaptor {
    private readonly prisma;
    constructor(prisma: PrismaService);
    updateUserId(dto: UsersUpdateUserIdAdaptorInputDto): Promise<UsersUpdateUserIdAdaptorOutputDto>;
}
