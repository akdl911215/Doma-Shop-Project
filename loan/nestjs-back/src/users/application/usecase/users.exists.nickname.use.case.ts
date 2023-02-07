import { Inject, Injectable } from "@nestjs/common";
import { UsersExistsNicknameAdaptor } from "../../domain/adaptor/users.exists.nickname.adaptor";
import { UsersExistsNicknameInputDto } from "../../inbound/dtos/users.exists.nickname.input.dto";
import { UsersExistsNicknameOutputDto } from "../../outbound/dtos/users.exists.nickname.dto";

@Injectable()
export class UsersExistsNicknameUseCase implements UsersExistsNicknameAdaptor {
  constructor(
    @Inject("EXISTS_NICKNAME")
    private readonly repository: UsersExistsNicknameAdaptor
  ) {}

  public async existsNickname(
    dto: UsersExistsNicknameInputDto
  ): Promise<UsersExistsNicknameOutputDto> {
    const {
      response: { validateNickname },
    } = await this.repository.existsNickname(dto);

    return {
      response: { validateNickname },
    };
  }
}
