import { Inject, Injectable } from "@nestjs/common";
import { UsersUpdatePasswordAdaptor } from "../../domain/adaptor/users.update.password.adaptor";
import { UsersUpdatePasswordAdaptorInputDto } from "../../inbound/dtos/users.update.password.adaptor.input.dto";
import { UsersUpdatePasswordAdaptorOutputDto } from "../../outbound/dtos/users.update.password.adaptor.output.dto";

@Injectable()
export class UsersUpdatePasswordUseCase implements UsersUpdatePasswordAdaptor {
  constructor(
    @Inject("UPDATE_PASSWORD")
    private readonly repository: UsersUpdatePasswordAdaptor
  ) {}

  public async updatePassword(
    dto: UsersUpdatePasswordAdaptorInputDto
  ): Promise<UsersUpdatePasswordAdaptorOutputDto> {
    return await this.repository.updatePassword(dto);
  }
}
