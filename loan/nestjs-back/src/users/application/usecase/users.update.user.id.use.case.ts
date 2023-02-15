import { Inject, Injectable } from "@nestjs/common";
import { UsersUpdateUserIdAdaptor } from "../../domain/adaptor/users.update.user.id.adaptor";
import { UsersUpdateUserIdAdaptorInputDto } from "../../inbound/dtos/users.update.user.id.adaptor.input.dto";
import { UsersUpdateUserIdAdaptorOutputDto } from "../../outbound/dtos/users.update.user.id.adaptor.output.dto";

@Injectable()
export class UsersUpdateUserIdUseCase implements UsersUpdateUserIdAdaptor {
  constructor(
    @Inject("UPDATE_USER_ID")
    private readonly repository: UsersUpdateUserIdAdaptor
  ) {}

  public async updateUserId(
    dto: UsersUpdateUserIdAdaptorInputDto
  ): Promise<UsersUpdateUserIdAdaptorOutputDto> {
    return await this.repository.updateUserId(dto);
  }
}
