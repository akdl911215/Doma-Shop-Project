import { UsersExistsUserIdAdaptorInputDto } from "../../inbound/dtos/users.exists.user.id.adaptor.input.dto";
import { UsersExistsUserIdAdaptorOutputDto } from "../../outbound/dtos/users.exists.user.id.adaptor.output.dto";
export interface UsersExistsUserIdAdaptor {
    readonly existsUserId: (dto: UsersExistsUserIdAdaptorInputDto) => Promise<UsersExistsUserIdAdaptorOutputDto>;
}
