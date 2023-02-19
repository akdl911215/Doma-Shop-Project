import { UsersDeleteAdaptorInputDto } from "../../inbound/dtos/users.delete.adaptor.input.dto";
import { UsersDeleteAdaptorOutputDto } from "../../outbound/dtos/users.delete.adaptor.output.dto";
import { PrismaService } from "../../../common/infrastructures/prisma/prisma.service";
import { UsersDeleteAdaptor } from "../../domain/adaptor/users.delete.adaptor";
export declare class UsersDeleteRepository implements UsersDeleteAdaptor {
    private readonly prisma;
    constructor(prisma: PrismaService);
    delete(dto: UsersDeleteAdaptorInputDto): Promise<UsersDeleteAdaptorOutputDto>;
}
