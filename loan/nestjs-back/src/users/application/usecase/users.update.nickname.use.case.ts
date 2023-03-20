import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { UsersUpdateNicknameAdaptor } from "../../domain/adaptors/users.update.nickname.adaptor";
import { UsersUpdateNicknameAdaptorInputDto } from "../../inbound/dtos/users.update.nickname.adaptor.input.dto";
import { UsersUpdateNicknameAdaptorOutputDto } from "../../outbound/dtos/users.update.nickname.adaptor.output.dto";
import { NICKNAME_REQUIRED } from "../../../_common/constants/http/errors/400";

@Injectable()
export class UsersUpdateNicknameUseCase implements UsersUpdateNicknameAdaptor {
  constructor(
    @Inject("UPDATE_NICKNAME")
    private readonly repository: UsersUpdateNicknameAdaptor
  ) {}

  public async updateNickname(
    dto: UsersUpdateNicknameAdaptorInputDto
  ): Promise<UsersUpdateNicknameAdaptorOutputDto> {
    const { nickname } = dto;
    if (!nickname) throw new BadRequestException(NICKNAME_REQUIRED);

    return await this.repository.updateNickname(dto);
  }
}
