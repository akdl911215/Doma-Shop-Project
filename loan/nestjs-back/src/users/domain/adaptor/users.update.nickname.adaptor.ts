import { UsersModel } from "../entity/users.model";
import { UsersUpdateNicknameAdaptorInputDto } from "../../inbound/dtos/users.update.nickname.adaptor.input.dto";
import { UsersUpdateNicknameAdaptorOutputDto } from "../../outbound/dtos/users.update.nickname.adaptor.output.dto";

export interface UsersUpdateNicknameAdaptor {
  readonly updateNickname: (dto: {
    requestNickname: UsersUpdateNicknameAdaptorInputDto;
    user: UsersModel;
  }) => Promise<UsersUpdateNicknameAdaptorOutputDto>;
}
