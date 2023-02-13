import { Inject, Injectable } from "@nestjs/common";
import { UsersProfileAdaptorOutputDto } from "../../outbound/dtos/users.profile.adaptor.output.dto";
import { UsersProfileAdaptor } from "../../domain/adaptor/users.profile.adaptor";
import { UsersProfileAdaptorInputDto } from "../../inbound/dtos/users.profile.adaptor.input.dto";

@Injectable()
export class UsersProfileUseCase implements UsersProfileAdaptor {
  constructor(
    @Inject("PROFILE")
    private readonly repository: UsersProfileAdaptor
  ) {}

  public async profile(
    dto: UsersProfileAdaptorInputDto
  ): Promise<UsersProfileAdaptorOutputDto> {
    return await this.repository.profile(dto);
  }
}
