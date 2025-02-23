import { Inject, Injectable } from "@nestjs/common";
import { UsersFindByIdInterface } from "../../interface/users.find.by.id.interface";
import { UsersFindByIdAdaptorOutputDto } from "../../../../../users/outbound/dtos/users.find.by.id.adaptor.output.dto";
import { UsersFindByIdAdaptorInputDto } from "../../../../../users/inbound/dtos/users.find.by.id.adaptor.input.dto";

@Injectable()
export class UsersFindByIdUseCase implements UsersFindByIdInterface {
  constructor(
    @Inject("USERS_FIND_BY_ID")
    private readonly repository: UsersFindByIdInterface
  ) {}

  public async usersFindById({
    id,
  }: UsersFindByIdAdaptorInputDto): Promise<UsersFindByIdAdaptorOutputDto> {
    return await this.repository.usersFindById({ id });
  }
}
