import { UsersExistsNicknameInputDto } from "../../inbound/dtos/users.exists.nickname.input.dto";
import { UsersExistsNicknameOutputDto } from "../../outbound/dtos/users.exists.nickname.dto";

export interface UsersExistsNicknameAdaptor {
  readonly existsNickname: (
    dto: UsersExistsNicknameInputDto
  ) => Promise<UsersExistsNicknameOutputDto>;
}
