import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { UsersUpdateUserIdAdaptor } from "../../domain/adaptor/users.update.user.id.adaptor";
import { UsersUpdateUserIdAdaptorInputDto } from "../../inbound/dtos/users.update.user.id.adaptor.input.dto";
import { UsersUpdateUserIdAdaptorOutputDto } from "../../outbound/dtos/users.update.user.id.adaptor.output.dto";
import { CONFIRM_REQUIRED_USER_ID_INFORMATION } from "../../../_common/constants/http/errors/400";

@Injectable()
export class UsersUpdateUserIdUseCase implements UsersUpdateUserIdAdaptor {
  constructor(
    @Inject("UPDATE_USER_ID")
    private readonly repository: UsersUpdateUserIdAdaptor
  ) {}

  public async updateUserId(
    dto: UsersUpdateUserIdAdaptorInputDto
  ): Promise<UsersUpdateUserIdAdaptorOutputDto> {
    const { userId } = dto;
    if (userId === "")
      throw new BadRequestException(CONFIRM_REQUIRED_USER_ID_INFORMATION);

    return await this.repository.updateUserId(dto);
  }
}
