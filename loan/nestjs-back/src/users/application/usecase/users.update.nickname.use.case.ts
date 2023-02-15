import { Inject, Injectable } from "@nestjs/common";
import { UsersUpdateNicknameAdaptor } from "../../domain/adaptor/users.update.nickname.adaptor";
import { UsersUpdateNicknameAdaptorInputDto } from "../../inbound/dtos/users.update.nickname.adaptor.input.dto";
import { UsersUpdateNicknameAdaptorOutputDto } from "../../outbound/dtos/users.update.nickname.adaptor.output.dto";

@Injectable()
export class UsersUpdateNicknameUseCase implements UsersUpdateNicknameAdaptor {
  constructor(
    @Inject("UPDATE_NICKNAME")
    private readonly repository: UsersUpdateNicknameAdaptor
  ) {}

  public async updateNickname(
    dto: UsersUpdateNicknameAdaptorInputDto
  ): Promise<UsersUpdateNicknameAdaptorOutputDto> {
    return await this.repository.updateNickname(dto);
  }
}
