import { UsersExistsUniqueIdInterfaceInputDto } from "../../inbound/dtos/interfaces/users.exists.unique.id.interface.input.dto";
import { UsersExistsUniqueIdInterfaceOutputDto } from "../../outbound/dtos/interfaces/users.exists.unique.id.interface.output.dto";

export interface UsersExistsUniqueIdInterface {
  readonly usersExistsFoundByUniqueId: (
    dto: UsersExistsUniqueIdInterfaceInputDto
  ) => Promise<UsersExistsUniqueIdInterfaceOutputDto>;
}
