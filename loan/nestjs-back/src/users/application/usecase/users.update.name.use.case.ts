import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { UsersUpdateNameAdaptor } from "../../domain/adaptors/users.update.name.adaptor";
import { UsersUpdateNameAdaptorInputDto } from "../../inbound/dtos/users.update.name.adaptor.input.dto";
import { UsersUpdateNameAdaptorOutputDto } from "../../outbound/dtos/users.update.name.adaptor.output.dto";
import { NAME_REQUIRED } from "../../../_common/constants/http/errors/400";

@Injectable()
export class UsersUpdateNameUseCase implements UsersUpdateNameAdaptor {
  constructor(
    @Inject("UPDATE_NAME")
    private readonly repository: UsersUpdateNameAdaptor
  ) {}

  public async updateName(
    dto: UsersUpdateNameAdaptorInputDto
  ): Promise<UsersUpdateNameAdaptorOutputDto> {
    const { name } = dto;
    if (!name) throw new BadRequestException(NAME_REQUIRED);

    return await this.repository.updateName(dto);
  }
}
