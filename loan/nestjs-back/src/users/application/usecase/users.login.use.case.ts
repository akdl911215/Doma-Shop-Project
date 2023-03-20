import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { UsersLoginAdaptorInputDto } from "../../inbound/dtos/users.login.adaptor.input.dto";
import { UsersLoginAdaptorOutputDto } from "../../outbound/dtos/users.login.adaptor.output.dto";
import { UsersLoginAdaptor } from "../../domain/adaptors/users.login.adaptor";
import {
  PASSWORD_REQUIRED,
  USER_ID_REQUIRED,
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

    if (!userId) throw new BadRequestException(USER_ID_REQUIRED);

    if (!password) throw new BadRequestException(PASSWORD_REQUIRED);

    return await this.repository.login(dto);
  }
}
