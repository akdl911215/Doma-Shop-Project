import { UsersUpdateNameAdaptorInputDto } from "../../inbound/dtos/users.update.name.adaptor.input.dto";
import { UsersUpdateNameAdaptorOutputDto } from "../../outbound/dtos/users.update.name.adaptor.output.dto";
export interface UsersUpdateNameAdaptor {
    readonly updateName: (dto: UsersUpdateNameAdaptorInputDto) => Promise<UsersUpdateNameAdaptorOutputDto>;
}
