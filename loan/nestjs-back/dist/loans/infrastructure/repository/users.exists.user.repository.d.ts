import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { UsersExistsUserInterface } from "../../domain/interface/users.exists.user.interface";
import { UsersExistsUserInterfaceInputDto } from "../../inbound/dtos/interface/users.exists.user.interface.input.dto";
import { UsersExistsUserInterfaceOutputDto } from "../../outbound/dtos/interface/users.exists.user.interface.output.dto";
export declare class UsersExistsUserRepository implements UsersExistsUserInterface {
    private readonly prisma;
    constructor(prisma: PrismaService);
    existsUser(dto: UsersExistsUserInterfaceInputDto): Promise<UsersExistsUserInterfaceOutputDto>;
}
