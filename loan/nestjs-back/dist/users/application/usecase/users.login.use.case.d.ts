import { UsersLoginAdaptorInputDto } from "../../inbound/dtos/users.login.adaptor.input.dto";
import { UsersLoginAdaptorOutputDto } from "../../outbound/dtos/users.login.adaptor.output.dto";
import { UsersLoginAdaptor } from "../../domain/adaptor/users.login.adaptor";
export declare class UsersLoginUseCase implements UsersLoginAdaptor {
    private readonly repository;
    constructor(repository: UsersLoginAdaptor);
    login(dto: UsersLoginAdaptorInputDto): Promise<UsersLoginAdaptorOutputDto>;
}
