import { Inject, Injectable } from "@nestjs/common";
import { UsersUpdateAddressAdaptor } from "../../domain/adaptor/users.update.address.adaptor";
import { UsersUpdateAddressAdaptorInputDto } from "../../inbound/dtos/users.update.address.adaptor.input.dto";
import { UsersUpdateAddressAdaptorOutputDto } from "../../outbound/dtos/users.update.address.adaptor.output.dto";

@Injectable()
export class UsersUpdateAddressUseCase implements UsersUpdateAddressAdaptor {
  constructor(
    @Inject("UPDATE_ADDRESS")
    private readonly repository: UsersUpdateAddressAdaptor
  ) {}

  public async updateAddress(
    dto: UsersUpdateAddressAdaptorInputDto
  ): Promise<UsersUpdateAddressAdaptorOutputDto> {
    return await this.repository.updateAddress(dto);
  }
}
