import { UsersUpdateUserIdAdaptor } from "../../domain/adaptor/users.update.user.id.adaptor";
import { UsersUpdateUserIdAdaptorInputDto } from "../../inbound/dtos/users.update.user.id.adaptor.input.dto";
import { UsersUpdateUserIdAdaptorOutputDto } from "../../outbound/dtos/users.update.user.id.adaptor.output.dto";
export declare class UsersUpdateUserIdUseCase implements UsersUpdateUserIdAdaptor {
    private readonly repository;
    constructor(repository: UsersUpdateUserIdAdaptor);
    updateUserId(dto: UsersUpdateUserIdAdaptorInputDto): Promise<UsersUpdateUserIdAdaptorOutputDto>;
}
