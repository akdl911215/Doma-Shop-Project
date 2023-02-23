import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { UsersUpdatePhoneAdaptor } from "../../domain/adaptor/users.update.phone.adaptor";
import { UsersUpdatePhoneAdaptorInputDto } from "../../inbound/dtos/users.update.phone.adaptor.input.dto";
import { UsersUpdatePhoneAdaptorOutputDto } from "../../outbound/dtos/users.update.phone.adaptor.output.dto";
import { CONFIRM_REQUIRED_PHONE_INFORMATION } from "../../../_common/constants/http/errors/400";

@Injectable()
export class UsersUpdatePhoneUseCase implements UsersUpdatePhoneAdaptor {
  constructor(
    @Inject("UPDATE_PHONE")
    private readonly repository: UsersUpdatePhoneAdaptor
  ) {}

  public async updatePhone(
    dto: UsersUpdatePhoneAdaptorInputDto
  ): Promise<UsersUpdatePhoneAdaptorOutputDto> {
    const { phone } = dto;
    if (phone === "")
      throw new BadRequestException(CONFIRM_REQUIRED_PHONE_INFORMATION);

    return await this.repository.updatePhone(dto);
  }
}
