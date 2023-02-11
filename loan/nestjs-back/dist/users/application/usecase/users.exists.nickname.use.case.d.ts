import { UsersExistsNicknameAdaptor } from "../../domain/adaptor/users.exists.nickname.adaptor";
import { UsersExistsNicknameInputDto } from "../../inbound/dtos/users.exists.nickname.input.dto";
import { UsersExistsNicknameOutputDto } from "../../outbound/dtos/users.exists.nickname.dto";
export declare class UsersExistsNicknameUseCase implements UsersExistsNicknameAdaptor {
    private readonly repository;
    constructor(repository: UsersExistsNicknameAdaptor);
    existsNickname(dto: UsersExistsNicknameInputDto): Promise<UsersExistsNicknameOutputDto>;
}
