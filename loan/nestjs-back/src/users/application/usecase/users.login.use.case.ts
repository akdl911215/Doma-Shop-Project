import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { UsersLoginAdaptorInputDto } from "../../inbound/dtos/users.login.adaptor.input.dto";
import { UsersLoginAdaptorOutputDto } from "../../outbound/dtos/users.login.adaptor.output.dto";
import { UsersLoginAdaptor } from "../../domain/adaptor/users.login.adaptor";
import {
  CONFIRM_REQUIRED_PASSWORD_INFORMATION,
  CONFIRM_REQUIRED_USER_ID_INFORMATION,
} from "../../../_common/constants/http/errors/400";

@Injectable()
export class UsersLoginUseCase implements UsersLoginAdaptor {
  constructor(
    @Inject("LOGIN") private readonly repository: UsersLoginAdaptor
  ) {}
  public async login(
    dto: UsersLoginAdaptorInputDto
  ): Promise<UsersLoginAdaptorOutputDto> {
    const { userId, password } = dto;

    if (userId === "")
      throw new BadRequestException(CONFIRM_REQUIRED_USER_ID_INFORMATION);

    if (password === "")
      throw new BadRequestException(CONFIRM_REQUIRED_PASSWORD_INFORMATION);

    return await this.repository.login(dto);
  }
}
