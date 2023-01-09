import { Inject, Injectable } from '@nestjs/common';
import { UsersDeleteAdaptor } from '../../domain/adapter/users.delete.adaptor';
import { UsersDeleteAdaptorInputDto } from '../../inbound/dtos/users.delete.adaptor.input.dto';
import { UsersModel } from '../../domain/entity/users.model';
import { UsersDeleteAdaptorOutputDto } from '../../outbound/dtos/users.delete.adaptor.output.dto';

@Injectable()
export class UsersDeleteUseCase implements UsersDeleteAdaptor {
  constructor(
    @Inject('DELETE') private readonly repository: UsersDeleteAdaptor,
  ) {}

  public async delete(dto: {
    requestUser: UsersDeleteAdaptorInputDto;
    user: UsersModel;
  }): Promise<UsersDeleteAdaptorOutputDto> {
    return await this.repository.delete(dto);
  }
}
