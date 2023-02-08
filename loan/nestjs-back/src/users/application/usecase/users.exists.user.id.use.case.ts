import { Inject, Injectable } from "@nestjs/common";
import { UsersExistsUserIdAdaptor } from "../../domain/adaptor/users.exists.user.id.adaptor";
import { UsersExistsUserIdInputDto } from "../../inbound/dtos/users.exists.user.id.input.dto";
import { UsersExistsUserIdOutputDto } from "../../outbound/dtos/users.exists.user.id.output.dto";

@Injectable()
export class UsersExistsUserIdUseCase implements UsersExistsUserIdAdaptor {
  constructor(
    @Inject("EXISTS_ACCOUNT_ID")
    private readonly repository: UsersExistsUserIdAdaptor
  ) {}

  public async existsUserId(
    dto: UsersExistsUserIdInputDto
  ): Promise<UsersExistsUserIdOutputDto> {
    const {
      response: { validateUserId },
    } = await this.repository.existsUserId(dto);

    return {
      response: { validateUserId },
    };
  }
}
