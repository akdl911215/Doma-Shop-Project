import { UsersExistsUniqueIdInterfaceInputDto } from "../../inbound/dtos/interface/users.exists.unique.id.interface.input.dto";
import { UsersExistsUniqueIdInterfaceOutputDto } from "../../outbound/dtos/interface/users.exists.unique.id.interface.output.dto";
export interface UsersExistsUniqueIdInterface {
    readonly usersExistsFoundByUniqueId: (dto: UsersExistsUniqueIdInterfaceInputDto) => Promise<UsersExistsUniqueIdInterfaceOutputDto>;
}
