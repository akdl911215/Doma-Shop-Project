import { UsersUpdateNicknameAdaptorInputDto } from "../../inbound/dtos/users.update.nickname.adaptor.input.dto";
import { UsersUpdateNicknameAdaptorOutputDto } from "../../outbound/dtos/users.update.nickname.adaptor.output.dto";

export interface UsersUpdateNicknameAdaptor {
  readonly updateNickname: (
    dto: UsersUpdateNicknameAdaptorInputDto
  ) => Promise<UsersUpdateNicknameAdaptorOutputDto>;
}
