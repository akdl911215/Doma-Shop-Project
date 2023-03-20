import { Inject, Injectable } from "@nestjs/common";
import { UsersExistsNicknameAdaptor } from "../../domain/adaptors/users.exists.nickname.adaptor";
import { UsersExistsNicknameAdaptorInputDto } from "../../inbound/dtos/users.exists.nickname.adaptor.input.dto";
import { UsersExistsNicknameOutputDto } from "../../outbound/dtos/users.exists.nickname.adaptor.output.dto";

@Injectable()
export class UsersExistsNicknameUseCase implements UsersExistsNicknameAdaptor {
  constructor(
    @Inject("EXISTS_NICKNAME")
    private readonly repository: UsersExistsNicknameAdaptor
  ) {}

  public async existsNickname(
    dto: UsersExistsNicknameAdaptorInputDto
  ): Promise<UsersExistsNicknameOutputDto> {
    const {
      response: { validateNickname },
    } = await this.repository.existsNickname(dto);

    return {
      response: { validateNickname },
    };
  }
}
