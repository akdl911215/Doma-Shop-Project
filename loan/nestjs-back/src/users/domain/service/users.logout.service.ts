import { Inject, Injectable } from "@nestjs/common";
import { UsersLogoutAdaptor } from "../adaptor/users.logout.adaptor";
import { UsersLogoutAdaptorInputDto } from "../../inbound/dtos/users.logout.adaptor.logout.input.dto";
import { UsersLogoutAdaptorOutputDto } from "../../outbound/dtos/users.logout.adaptor.output.dto";

@Injectable()
export class UsersLogoutService implements UsersLogoutAdaptor {
  constructor(
    @Inject("LOGOUT") private readonly repository: UsersLogoutAdaptor
  ) {}

  public async logout(
    dto: UsersLogoutAdaptorInputDto
  ): Promise<UsersLogoutAdaptorOutputDto> {
    const {
      response: { logout },
    } = await this.repository.logout(dto);

    return { response: { logout } };
  }
}
