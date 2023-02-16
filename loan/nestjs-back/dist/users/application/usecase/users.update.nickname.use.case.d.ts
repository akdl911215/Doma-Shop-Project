import { UsersUpdateNicknameAdaptor } from "../../domain/adaptor/users.update.nickname.adaptor";
import { UsersUpdateNicknameAdaptorInputDto } from "../../inbound/dtos/users.update.nickname.adaptor.input.dto";
import { UsersUpdateNicknameAdaptorOutputDto } from "../../outbound/dtos/users.update.nickname.adaptor.output.dto";
export declare class UsersUpdateNicknameUseCase implements UsersUpdateNicknameAdaptor {
    private readonly repository;
    constructor(repository: UsersUpdateNicknameAdaptor);
    updateNickname(dto: UsersUpdateNicknameAdaptorInputDto): Promise<UsersUpdateNicknameAdaptorOutputDto>;
}
