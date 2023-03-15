import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { UsersExistsUserIdInterface } from "../../domain/interface/users.exists.user.id.interface";
import { UsersExistsUserIdInterfaceInputDto } from "../../inbound/dtos/interface/users.exists.user.id.interface.input.dto";
import { UsersExistsUserIdInterfaceOutputDto } from "../../outbound/dtos/interface/users.exists.user.id.interface.output.dto";
export declare class UsersExistsUserIdRepository implements UsersExistsUserIdInterface {
    private readonly prisma;
    constructor(prisma: PrismaService);
    usersExistsFoundByUserId(dto: UsersExistsUserIdInterfaceInputDto): Promise<UsersExistsUserIdInterfaceOutputDto>;
}
