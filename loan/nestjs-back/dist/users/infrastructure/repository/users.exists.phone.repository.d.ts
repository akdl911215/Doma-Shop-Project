import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { UsersExistsPhoneAdaptor } from "../../domain/adaptor/users.exists.phone.adaptor";
import { UsersExistsPhoneAdaptorInputDto } from "../../inbound/dtos/users.exists.phone.adaptor.input.dto";
import { UsersExistsPhoneAdaptorOutputDto } from "../../outbound/dtos/users.exists.phone.adaptor.output.dto";
export declare class UsersExistsPhoneRepository implements UsersExistsPhoneAdaptor {
    private readonly prisma;
    constructor(prisma: PrismaService);
    existsPhone(dto: UsersExistsPhoneAdaptorInputDto): Promise<UsersExistsPhoneAdaptorOutputDto>;
}
