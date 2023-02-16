import { UsersUpdatePasswordAdaptor } from "../../domain/adaptor/users.update.password.adaptor";
import { UsersUpdatePasswordAdaptorInputDto } from "../../inbound/dtos/users.update.password.adaptor.input.dto";
import { UsersUpdatePasswordAdaptorOutputDto } from "../../outbound/dtos/users.update.password.adaptor.output.dto";
export declare class UsersUpdatePasswordUseCase implements UsersUpdatePasswordAdaptor {
    private readonly repository;
    constructor(repository: UsersUpdatePasswordAdaptor);
    updatePassword(dto: UsersUpdatePasswordAdaptorInputDto): Promise<UsersUpdatePasswordAdaptorOutputDto>;
}
