import { UsersLogoutAdaptor } from "../adaptor/users.logout.adaptor";
import { UsersLogoutAdaptorInputDto } from "../../inbound/dtos/users.logout.adaptor.input.dto";
import { UsersLogoutAdaptorOutputDto } from "../../outbound/dtos/users.logout.adaptor.output.dto";
export declare class UsersLogoutService implements UsersLogoutAdaptor {
    private readonly repository;
    constructor(repository: UsersLogoutAdaptor);
    logout(dto: UsersLogoutAdaptorInputDto): Promise<UsersLogoutAdaptorOutputDto>;
}
