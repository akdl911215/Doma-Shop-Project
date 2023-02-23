import { UsersWithdrawalAdaptorInputDto } from "../../inbound/dtos/users.withdrawal.adaptor.input.dto";
import { UsersWithdrawalAdaptorOutputDto } from "../../outbound/dtos/users.withdrawal.adaptor.output.dto";
import { UsersWithdrawalAdaptor } from "../../domain/adaptor/users.withdrawal.adaptor";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
export declare class UsersWithdrawalRepository implements UsersWithdrawalAdaptor {
    private readonly prisma;
    constructor(prisma: PrismaService);
    withdrawal(dto: UsersWithdrawalAdaptorInputDto): Promise<UsersWithdrawalAdaptorOutputDto>;
}
