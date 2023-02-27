import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { UsersUpdatePasswordAdaptor } from "../../domain/adaptor/users.update.password.adaptor";
import { UsersUpdatePasswordAdaptorInputDto } from "../../inbound/dtos/users.update.password.adaptor.input.dto";
import { UsersUpdatePasswordAdaptorOutputDto } from "../../outbound/dtos/users.update.password.adaptor.output.dto";
import { PASSWORD_REQUIRED } from "../../../_common/constants/http/errors/400";

@Injectable()
export class UsersUpdatePasswordUseCase implements UsersUpdatePasswordAdaptor {
  constructor(
    @Inject("UPDATE_PASSWORD")
    private readonly repository: UsersUpdatePasswordAdaptor
  ) {}

  public async updatePassword(
    dto: UsersUpdatePasswordAdaptorInputDto
  ): Promise<UsersUpdatePasswordAdaptorOutputDto> {
    const { password } = dto;
    if (!password) throw new BadRequestException(PASSWORD_REQUIRED);

    return await this.repository.updatePassword(dto);
  }
}
