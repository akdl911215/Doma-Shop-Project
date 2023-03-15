import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { UsersExistsUniqueIdInterface } from "../../domain/interface/users.exists.unique.id.interface";
import { UsersExistsUniqueIdInterfaceInputDto } from "../../inbound/dtos/interface/users.exists.unique.id.interface.input.dto";
import { UsersExistsUniqueIdInterfaceOutputDto } from "../../outbound/dtos/interface/users.exists.unique.id.interface.output.dto";
export declare class UsersExistsUniqueIdRepository implements UsersExistsUniqueIdInterface {
    private readonly prisma;
    constructor(prisma: PrismaService);
    usersExistsFoundByUniqueId(dto: UsersExistsUniqueIdInterfaceInputDto): Promise<UsersExistsUniqueIdInterfaceOutputDto>;
}
