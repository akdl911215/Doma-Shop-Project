import { PrismaService } from "../../../common/infrastructures/prisma/prisma.service";
import { UsersExistsUserIdAdaptor } from "../../domain/adaptor/users.exists.user.id.adaptor";
import { UsersExistsUserIdAdaptorInputDto } from "../../inbound/dtos/users.exists.user.id.adaptor.input.dto";
import { UsersExistsUserIdAdaptorOutputDto } from "../../outbound/dtos/users.exists.user.id.adaptor.output.dto";
export declare class UsersExistsUserIdRepository implements UsersExistsUserIdAdaptor {
    private readonly prisma;
    constructor(prisma: PrismaService);
    existsUserId(dto: UsersExistsUserIdAdaptorInputDto): Promise<UsersExistsUserIdAdaptorOutputDto>;
}
