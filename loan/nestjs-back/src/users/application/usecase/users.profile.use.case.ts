import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { UsersProfileAdaptorOutputDto } from "../../outbound/dtos/users.profile.adaptor.output.dto";
import { UsersProfileAdaptor } from "../../domain/adaptor/users.profile.adaptor";
import { UsersProfileAdaptorInputDto } from "../../inbound/dtos/users.profile.adaptor.input.dto";
import { CONFIRM_REQUIRED_UNIQUE_ID_INFORMATION } from "../../../common/constants/http/errors/400";

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

    function meaninglessUniqueId(id): boolean {
      if (id === "" || !id) {
        return true;
      } else {
        return false;
      }
    }

    if (meaninglessUniqueId(id))
      throw new BadRequestException(CONFIRM_REQUIRED_UNIQUE_ID_INFORMATION);

    return await this.repository.profile(dto);
  }
}
