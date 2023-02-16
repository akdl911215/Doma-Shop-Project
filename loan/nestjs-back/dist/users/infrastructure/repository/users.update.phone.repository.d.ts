import { UsersUpdatePhoneAdaptorInputDto } from "../../inbound/dtos/users.update.phone.adaptor.input.dto";
import { UsersUpdatePhoneAdaptorOutputDto } from "../../outbound/dtos/users.update.phone.adaptor.output.dto";
import { PrismaService } from "../../../common/infrastructures/prisma/prisma.service";
import { UsersUpdatePhoneAdaptor } from "../../domain/adaptor/users.update.phone.adaptor";
export declare class UsersUpdatePhoneRepository implements UsersUpdatePhoneAdaptor {
    private readonly prisma;
    constructor(prisma: PrismaService);
    updatePhone(dto: UsersUpdatePhoneAdaptorInputDto): Promise<UsersUpdatePhoneAdaptorOutputDto>;
}
