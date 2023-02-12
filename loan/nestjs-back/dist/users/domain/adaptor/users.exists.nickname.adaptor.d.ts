import { UsersExistsNicknameAdaptorInputDto } from "../../inbound/dtos/users.exists.nickname.adaptor.input.dto";
import { UsersExistsNicknameOutputDto } from "../../outbound/dtos/users.exists.nickname.adaptor.output.dto";
export interface UsersExistsNicknameAdaptor {
    readonly existsNickname: (dto: UsersExistsNicknameAdaptorInputDto) => Promise<UsersExistsNicknameOutputDto>;
}
