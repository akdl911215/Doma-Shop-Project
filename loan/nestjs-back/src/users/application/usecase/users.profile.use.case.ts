import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { UsersProfileAdaptorOutputDto } from "../../outbound/dtos/users.profile.adaptor.output.dto";
import { UsersProfileAdaptor } from "../../domain/adaptor/users.profile.adaptor";
import { UsersProfileAdaptorInputDto } from "../../inbound/dtos/users.profile.adaptor.input.dto";
import { UNIQUE_ID_REQUIRED } from "../../../_common/constants/http/errors/400";

@Injectable()
export class UsersProfileUseCase implements UsersProfileAdaptor {
  constructor(
    @Inject("PROFILE")
    private readonly repository: UsersProfileAdaptor
  ) {}

  public async profile(
    dto: UsersProfileAdaptorInputDto
  ): Promise<UsersProfileAdaptorOutputDto> {
    const { id } = dto;

    if (!id) throw new BadRequestException(UNIQUE_ID_REQUIRED);

    return await this.repository.profile(dto);
  }
}
