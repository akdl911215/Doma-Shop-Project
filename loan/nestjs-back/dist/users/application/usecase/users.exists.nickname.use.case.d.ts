import { UsersExistsNicknameAdaptor } from "../../domain/adaptor/users.exists.nickname.adaptor";
import { UsersExistsNicknameAdaptorInputDto } from "../../inbound/dtos/users.exists.nickname.adaptor.input.dto";
import { UsersExistsNicknameOutputDto } from "../../outbound/dtos/users.exists.nickname.adaptor.output.dto";
export declare class UsersExistsNicknameUseCase implements UsersExistsNicknameAdaptor {
    private readonly repository;
    constructor(repository: UsersExistsNicknameAdaptor);
    existsNickname(dto: UsersExistsNicknameAdaptorInputDto): Promise<UsersExistsNicknameOutputDto>;
}
