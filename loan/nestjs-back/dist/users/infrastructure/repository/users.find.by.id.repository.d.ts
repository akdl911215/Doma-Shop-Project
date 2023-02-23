import { UsersFindByIdAdaptorOutputDto } from "../../outbound/dtos/users.find.by.id.adaptor.output.dto";
import { UsersFindByIdAdaptorInputDto } from "../../inbound/dtos/users.find.by.id.adaptor.input.dto";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { UsersFindByIdInterface } from "../../../_common/infrastructures/token/interface/users.find.by.id.interface";
export declare class UsersFindByIdRepository implements UsersFindByIdInterface {
    private readonly prisma;
    constructor(prisma: PrismaService);
    usersFindById({ id, }: UsersFindByIdAdaptorInputDto): Promise<UsersFindByIdAdaptorOutputDto>;
}
