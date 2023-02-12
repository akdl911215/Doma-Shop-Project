import { Inject, Injectable } from "@nestjs/common";
import { UsersExistsUserIdAdaptor } from "../../domain/adaptor/users.exists.user.id.adaptor";
import { UsersExistsUserIdAdaptorInputDto } from "../../inbound/dtos/users.exists.user.id.adaptor.input.dto";
import { UsersExistsUserIdAdaptorOutputDto } from "../../outbound/dtos/users.exists.user.id.adaptor.output.dto";

@Injectable()
export class UsersExistsUserIdUseCase implements UsersExistsUserIdAdaptor {
  constructor(
    @Inject("EXISTS_USER_ID")
    private readonly repository: UsersExistsUserIdAdaptor
  ) {}

  public async existsUserId(
    dto: UsersExistsUserIdAdaptorInputDto
  ): Promise<UsersExistsUserIdAdaptorOutputDto> {
    const {
      response: { validateUserId },
    } = await this.repository.existsUserId(dto);

    return {
      response: { validateUserId },
    };
  }
}
