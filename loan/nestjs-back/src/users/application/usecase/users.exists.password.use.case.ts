import { Inject, Injectable } from "@nestjs/common";
import { UsersModel } from "../../domain/entity/users.model";
import { UsersUpdatePhoneAdaptor } from "../../domain/adaptor/users.update.phone.adaptor";

@Injectable()
export class UsersUpdatePhoneUseCase implements UsersUpdatePhoneAdaptor {
  constructor(
    @Inject("UPDATE_PHONE")
    private readonly repository: UsersUpdatePhoneAdaptor
  ) {}

  public async updatePhone(dto: {
    requestPhone: UsersUpdatePhoneAdaptorInputDto;
    user: UsersModel;
  }): Promise<UsersUpdatePhoneAdaptorOutputDto> {
    return await this.repository.updatePhone(dto);
  }
}
