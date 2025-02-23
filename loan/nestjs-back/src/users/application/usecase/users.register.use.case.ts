import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { UsersRegisterAdaptorInputDto } from "../../inbound/dtos/users.register.adaptor.input.dto";
import { UsersRegisterAdaptorOutputDto } from "../../outbound/dtos/users.register.adaptor.output.dto";
import { UsersRegisterAdaptor } from "../../domain/adaptors/users.register.adaptor";
import { UsersExistsUserIdAdaptor } from "../../domain/adaptors/users.exists.user.id.adaptor";
import { UsersExistsPhoneAdaptor } from "../../domain/adaptors/users.exists.phone.adaptor";
import { UsersExistsNicknameAdaptor } from "../../domain/adaptors/users.exists.nickname.adaptor";
import { USER_REQUIRED } from "../../../_common/constants/http/errors/400";

@Injectable()
export class UsersRegisterUseCase implements UsersRegisterAdaptor {
  constructor(
    @Inject("REGISTER")
    private readonly repository: UsersRegisterAdaptor,
    @Inject("EXISTS_USER_ID")
    private readonly requestUserId: UsersExistsUserIdAdaptor,
    @Inject("EXISTS_PHONE")
    private readonly requestPhone: UsersExistsPhoneAdaptor,
    @Inject("EXISTS_NICKNAME")
    private readonly requestNickname: UsersExistsNicknameAdaptor
  ) {}

  public async register(
    dto: UsersRegisterAdaptorInputDto
  ): Promise<UsersRegisterAdaptorOutputDto> {
    const { userId, nickname, phone, address, name, password } = dto;

    if (!userId || !nickname || !phone || !address || !name || !password) {
      throw new BadRequestException(USER_REQUIRED);
    }
    await this.requestUserId.existsUserId({ userId });
    await this.requestPhone.existsPhone({ phone });
    await this.requestNickname.existsNickname({ nickname });

    return await this.repository.register(dto);
  }
}
