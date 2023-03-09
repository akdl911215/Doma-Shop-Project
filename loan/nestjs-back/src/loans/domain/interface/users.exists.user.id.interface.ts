import { UsersExistsUserIdInterfaceInputDto } from "../../inbound/dtos/interface/users.exists.user.id.interface.input.dto";
import { UsersExistsUserIdInterfaceOutputDto } from "../../outbound/dtos/interface/users.exists.user.id.interface.output.dto";

export interface UsersExistsUserIdInterface {
  readonly usersExistsFoundByUserId: (
    dto: UsersExistsUserIdInterfaceInputDto
  ) => Promise<UsersExistsUserIdInterfaceOutputDto>;
}
