import { UsersProfileAdaptorInputDto } from "../../inbound/dtos/users.profile.adaptor.input.dto";
import { UsersProfileAdaptorOutputDto } from "../../outbound/dtos/users.profile.adaptor.output.dto";
export interface UsersProfileAdaptor {
    readonly profile: (dto: UsersProfileAdaptorInputDto) => Promise<UsersProfileAdaptorOutputDto>;
}
