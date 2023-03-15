import { UsersExistsUserInterfaceInputDto } from "../../inbound/dtos/interface/users.exists.user.interface.input.dto";
import { UsersExistsUserInterfaceOutputDto } from "../../outbound/dtos/interface/users.exists.user.interface.output.dto";
export interface UsersExistsUserInterface {
    readonly existsUser: (dto: UsersExistsUserInterfaceInputDto) => Promise<UsersExistsUserInterfaceOutputDto>;
}
