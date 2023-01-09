import { Inject, Injectable } from '@nestjs/common';
import { UsersLoginAdaptor } from '../../domain/adapter/users.login.adaptor';
import { UsersLoginAdaptorInputDto } from '../../inbound/dtos/users.login.adaptor.input.dto';
import { UsersLoginAdaptorOutputDto } from '../../outbound/dtos/users.login.adaptor.output.dto';

@Injectable()
export class UsersLoginUseCase implements UsersLoginAdaptor {
  constructor(
    @Inject('LOGIN') private readonly repository: UsersLoginAdaptor,
  ) {}
  public async login(
    dto: UsersLoginAdaptorInputDto,
  ): Promise<UsersLoginAdaptorOutputDto> {
    return await this.repository.login(dto);
  }
}
