import { UsersExistsUserInterfaceInputDto } from "../../inbound/dtos/interfaces/users.exists.user.interface.input.dto";
import { UsersExistsUserInterfaceOutputDto } from "../../outbound/dtos/interfaces/users.exists.user.interface.output.dto";

export interface UsersExistsUserInterface {
  readonly existsUser: (
    dto: UsersExistsUserInterfaceInputDto
  ) => Promise<UsersExistsUserInterfaceOutputDto>;
}
