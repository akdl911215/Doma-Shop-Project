import { UsersUpdateNicknameAdaptorInputDto } from "../../inbound/dtos/users.update.nickname.adaptor.input.dto";
import { UsersModel } from "../../domain/entity/users.model";
import { UsersUpdateNicknameAdaptorOutputDto } from "../../outbound/dtos/users.update.nickname.adaptor.output.dto";
import { PrismaService } from "../../../common/infrastructures/prisma/prisma.service";
import { UsersUpdateNicknameAdaptor } from "../../domain/adaptor/users.update.nickname.adaptor";
export declare class UsersUpdateNicknameRepository implements UsersUpdateNicknameAdaptor {
    private readonly prisma;
    constructor(prisma: PrismaService);
    updateNickname(dto: {
        requestNickname: UsersUpdateNicknameAdaptorInputDto;
        user: UsersModel;
    }): Promise<UsersUpdateNicknameAdaptorOutputDto>;
}
