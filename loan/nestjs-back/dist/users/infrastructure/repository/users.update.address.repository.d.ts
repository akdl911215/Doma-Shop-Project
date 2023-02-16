import { PrismaService } from "../../../common/infrastructures/prisma/prisma.service";
import { UsersUpdateAddressAdaptor } from "../../domain/adaptor/users.update.address.adaptor";
import { UsersUpdateAddressAdaptorInputDto } from "../../inbound/dtos/users.update.address.adaptor.input.dto";
import { UsersUpdateAddressAdaptorOutputDto } from "../../outbound/dtos/users.update.address.adaptor.output.dto";
export declare class UsersUpdateAddressRepository implements UsersUpdateAddressAdaptor {
    private readonly prisma;
    constructor(prisma: PrismaService);
    updateAddress(dto: UsersUpdateAddressAdaptorInputDto): Promise<UsersUpdateAddressAdaptorOutputDto>;
}
