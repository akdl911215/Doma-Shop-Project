import { Inject, Injectable } from "@nestjs/common";
import { UsersExistsPhoneAdaptor } from "../../domain/adaptor/users.exists.phone.adaptor";
import { UsersExistsPhoneAdaptorInputDto } from "../../inbound/dtos/users.exists.phone.input.dto";
import { UsersExistsPhoneAdaptorOutputDto } from "../../outbound/dtos/users.exists.output.phone.dto";

@Injectable()
export class UsersExistsPhoneUseCase implements UsersExistsPhoneAdaptor {
  @Inject("EXISTS_PHONE")
  private readonly repository: UsersExistsPhoneAdaptor;

  constructor(
    @Inject("EXISTS_PHONE")
    repository: UsersExistsPhoneAdaptor
  ) {
    this.repository = repository;
  }

  public async existsPhone(
    dto: UsersExistsPhoneAdaptorInputDto
  ): Promise<UsersExistsPhoneAdaptorOutputDto> {
    const {
      response: { validatePhone },
    } = await this.repository.existsPhone(dto);

    return { response: { validatePhone } };
  }
}
