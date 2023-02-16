import { UsersLogoutAdaptorInputDto } from "../../inbound/dtos/users.logout.adaptor.logout.input.dto";
import { UsersLogoutAdaptorOutputDto } from "../../outbound/dtos/users.logout.adaptor.output.dto";
export interface UsersLogoutAdaptor {
    logout: (dto: UsersLogoutAdaptorInputDto) => Promise<UsersLogoutAdaptorOutputDto>;
}
