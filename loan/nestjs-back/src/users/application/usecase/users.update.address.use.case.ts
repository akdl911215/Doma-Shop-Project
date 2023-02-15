import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { UsersUpdateAddressAdaptor } from "../../domain/adaptor/users.update.address.adaptor";
import { UsersUpdateAddressAdaptorInputDto } from "../../inbound/dtos/users.update.address.adaptor.input.dto";
import { UsersUpdateAddressAdaptorOutputDto } from "../../outbound/dtos/users.update.address.adaptor.output.dto";
import { CONFIRM_REQUIRED_ADDRESS_INFORMATION } from "../../../common/constants/http/errors/400";

@Injectable()
export class UsersUpdateAddressUseCase implements UsersUpdateAddressAdaptor {
  constructor(
    @Inject("UPDATE_ADDRESS")
    private readonly repository: UsersUpdateAddressAdaptor
  ) {}

  public async updateAddress(
    dto: UsersUpdateAddressAdaptorInputDto
  ): Promise<UsersUpdateAddressAdaptorOutputDto> {
    const { address } = dto;
    if (address === "")
      throw new BadRequestException(CONFIRM_REQUIRED_ADDRESS_INFORMATION);

    return await this.repository.updateAddress(dto);
  }
}
