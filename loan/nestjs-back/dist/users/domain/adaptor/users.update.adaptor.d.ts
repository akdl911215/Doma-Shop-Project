import { UsersUpdateAdaptorInputDto } from "../../inbound/dtos/users.update.adaptor.input.dto";
import { UsersUpdateAdaptorOutputDto } from "../../outbound/dtos/users.update.adaptor.output.dto";
export interface UsersUpdateAdaptor {
    readonly update: (dto: UsersUpdateAdaptorInputDto) => Promise<UsersUpdateAdaptorOutputDto>;
}
