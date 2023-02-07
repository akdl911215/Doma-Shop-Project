import { Inject, Injectable } from "@nestjs/common";
import { UsersUpdateAdaptor } from "../../domain/adaptor/users.update.adaptor";
import { UsersUpdateAdaptorInputDto } from "../../inbound/dtos/users.update.adaptor.input.dto";
import { UsersUpdateAdaptorOutputDto } from "../../outbound/dtos/users.update.adaptor.output.dto";

@Injectable()
export class UsersUpdateUseCase implements UsersUpdateAdaptor {
  constructor(
    @Inject("UPDATE") private readonly repository: UsersUpdateAdaptor
  ) {}

  public async update(
    dto: UsersUpdateAdaptorInputDto
  ): Promise<UsersUpdateAdaptorOutputDto> {
    return await this.repository.update(dto);
  }
}
