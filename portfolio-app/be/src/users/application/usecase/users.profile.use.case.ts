import { Inject, Injectable } from '@nestjs/common';
import { UsersProfileAdaptor } from '../../domain/adapter/users.profile.adaptor';
import { UsersModel } from '../../domain/entity/users.model';
import { UsersProfileAdaptorOutputDto } from '../../outbound/dtos/users.profile.adaptor.output.dto';

@Injectable()
export class UsersProfileUseCase implements UsersProfileAdaptor {
  constructor(
    @Inject('PROFILE')
    private readonly repository: UsersProfileAdaptor,
  ) {}

  public async userProfile(
    dto: UsersModel,
  ): Promise<UsersProfileAdaptorOutputDto> {
    return await this.repository.userProfile(dto);
  }
}
