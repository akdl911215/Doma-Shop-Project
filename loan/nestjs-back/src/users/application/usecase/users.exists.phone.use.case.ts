import { Inject, Injectable } from "@nestjs/common";
import { UsersExistsPhoneAdaptor } from "../../domain/adaptors/users.exists.phone.adaptor";
import { UsersExistsPhoneAdaptorInputDto } from "../../inbound/dtos/users.exists.phone.adaptor.input.dto";
import { UsersExistsPhoneAdaptorOutputDto } from "../../outbound/dtos/users.exists.phone.adaptor.output.dto";

@Injectable()
export class UsersExistsPhoneUseCase implements UsersExistsPhoneAdaptor {
  @Inject("EXISTS_PHONE")
  private readonly repository: UsersExistsPhoneAdaptor;

  constructor(
    @Inject("EXISTS_PHONE")
    repository: UsersExistsPhoneAdaptor
  ) {}

  public async existsPhone(
    dto: UsersExistsPhoneAdaptorInputDto
  ): Promise<UsersExistsPhoneAdaptorOutputDto> {
    const {
      response: { validatePhone },
    } = await this.repository.existsPhone(dto);

    return { response: { validatePhone } };
  }
}
