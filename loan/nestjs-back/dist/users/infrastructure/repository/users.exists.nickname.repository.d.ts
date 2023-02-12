import { PrismaService } from "../../../common/infrastructures/prisma/prisma.service";
import { UsersExistsNicknameAdaptor } from "../../domain/adaptor/users.exists.nickname.adaptor";
import { UsersExistsNicknameAdaptorInputDto } from "../../inbound/dtos/users.exists.nickname.adaptor.input.dto";
import { UsersExistsNicknameOutputDto } from "../../outbound/dtos/users.exists.nickname.adaptor.output.dto";
export declare class UsersExistsNicknameRepository implements UsersExistsNicknameAdaptor {
    private readonly prisma;
    constructor(prisma: PrismaService);
    existsNickname(dto: UsersExistsNicknameAdaptorInputDto): Promise<UsersExistsNicknameOutputDto>;
}
