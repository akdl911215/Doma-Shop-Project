import { Inject, Injectable } from "@nestjs/common";
import { UsersUpdateNameAdaptor } from "../../domain/adaptor/users.update.name.adaptor";
import { UsersUpdateNameAdaptorInputDto } from "../../inbound/dtos/users.update.name.adaptor.input.dto";
import { UsersUpdateNameAdaptorOutputDto } from "../../outbound/dtos/users.update.name.adaptor.output.dto";

@Injectable()
export class UsersUpdateNameUseCase implements UsersUpdateNameAdaptor {
  constructor(
    @Inject("UPDATE_NAME")
    private readonly repository: UsersUpdateNameAdaptor
  ) {}

  public async updateName(
    dto: UsersUpdateNameAdaptorInputDto
  ): Promise<UsersUpdateNameAdaptorOutputDto> {
    return await this.repository.updateName(dto);
  }
}
