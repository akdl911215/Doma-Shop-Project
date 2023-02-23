import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { UsersUpdateNameAdaptor } from "../../domain/adaptor/users.update.name.adaptor";
import { UsersUpdateNameAdaptorInputDto } from "../../inbound/dtos/users.update.name.adaptor.input.dto";
import { UsersUpdateNameAdaptorOutputDto } from "../../outbound/dtos/users.update.name.adaptor.output.dto";
export declare class UsersUpdateNameRepository implements UsersUpdateNameAdaptor {
    private readonly prisma;
    constructor(prisma: PrismaService);
    updateName(dto: UsersUpdateNameAdaptorInputDto): Promise<UsersUpdateNameAdaptorOutputDto>;
}
