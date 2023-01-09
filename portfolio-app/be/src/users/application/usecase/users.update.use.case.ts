import { Inject, Injectable } from '@nestjs/common';
import { UsersUpdateAdaptor } from '../../domain/adapter/users.update.adaptor';
import { UsersUpdateAdaptorInputDto } from '../../inbound/dtos/users.update.adaptor.input.dto';
import { UsersModel } from '../../domain/entity/users.model';
import { UsersUpdateAdaptorOutputDto } from '../../outbound/dtos/users.update.adaptor.output.dto';

@Injectable()
export class UsersUpdateUseCase implements UsersUpdateAdaptor {
  constructor(
    @Inject('UPDATE') private readonly repository: UsersUpdateAdaptor,
  ) {}

  public async update(dto: {
    requestUser: UsersUpdateAdaptorInputDto;
    user: UsersModel;
  }): Promise<UsersUpdateAdaptorOutputDto> {
    return await this.repository.update(dto);
  }
}
