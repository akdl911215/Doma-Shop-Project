import { Inject, Injectable } from '@nestjs/common';
import { UsersProfileAdaptorOutputDto } from '../../outbound/dtos/users.profile.adaptor.output.dto';
import { UsersModel } from "../../domain/entity/users.model";
import { UsersProfileAdaptor } from "../../domain/adaptor/users.profile.adaptor";

@Injectable()
export class UsersProfileUseCase implements UsersProfileAdaptor {
  constructor(
    @Inject('PROFILE')
    private readonly repository: UsersProfileAdaptor,
  ) {}

  public async profile(
    dto: UsersModel,
  ): Promise<UsersProfileAdaptorOutputDto> {
    return await this.repository.profile(dto);
  }
}
