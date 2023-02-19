import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { UsersLogoutAdaptor } from "../adaptor/users.logout.adaptor";
import { UsersLogoutAdaptorInputDto } from "../../inbound/dtos/users.logout.adaptor.input.dto";
import { UsersLogoutAdaptorOutputDto } from "../../outbound/dtos/users.logout.adaptor.output.dto";
import { CONFIRM_REQUIRED_UNIQUE_ID_INFORMATION } from "../../../common/constants/http/errors/400";

@Injectable()
export class UsersLogoutService implements UsersLogoutAdaptor {
  constructor(
    @Inject("LOGOUT") private readonly repository: UsersLogoutAdaptor
  ) {}

  public async logout(
    dto: UsersLogoutAdaptorInputDto
  ): Promise<UsersLogoutAdaptorOutputDto> {
    const { id } = dto;
    if (!id)
      throw new BadRequestException(CONFIRM_REQUIRED_UNIQUE_ID_INFORMATION);

    const {
      response: { logout },
    } = await this.repository.logout(dto);

    return { response: { logout } };
  }
}
