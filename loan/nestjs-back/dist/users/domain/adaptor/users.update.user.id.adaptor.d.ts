import { UsersUpdateUserIdAdaptorOutputDto } from "../../outbound/dtos/users.update.user.id.adaptor.output.dto";
import { UsersUpdateUserIdAdaptorInputDto } from "../../inbound/dtos/users.update.user.id.adaptor.input.dto";
export interface UsersUpdateUserIdAdaptor {
    readonly updateUserId: (dto: UsersUpdateUserIdAdaptorInputDto) => Promise<UsersUpdateUserIdAdaptorOutputDto>;
}
