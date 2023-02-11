import { UsersRegisterAdaptorInputDto } from "../../inbound/dtos/users.register.adaptor.input.dto";
import { UsersRegisterAdaptorOutputDto } from "../../outbound/dtos/users.register.adaptor.output.dto";
import { UsersRegisterAdaptor } from "../../domain/adaptor/users.register.adaptor";
import { UsersExistsUserIdAdaptor } from "../../domain/adaptor/users.exists.user.id.adaptor";
import { UsersExistsPhoneAdaptor } from "../../domain/adaptor/users.exists.phone.adaptor";
import { UsersExistsNicknameAdaptor } from "../../domain/adaptor/users.exists.nickname.adaptor";
export declare class UsersRegisterUseCase implements UsersRegisterAdaptor {
    private readonly repository;
    private readonly requestUserId;
    private readonly requestPhone;
    private readonly requestNickname;
    constructor(repository: UsersRegisterAdaptor, requestUserId: UsersExistsUserIdAdaptor, requestPhone: UsersExistsPhoneAdaptor, requestNickname: UsersExistsNicknameAdaptor);
    register(dto: UsersRegisterAdaptorInputDto): Promise<UsersRegisterAdaptorOutputDto>;
}
