import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { UsersRegisterAdaptor } from '../../domain/adapter/users.register.adaptor';
import { UsersRegisterAdaptorInputDto } from '../../inbound/dtos/users.register.adaptor.input.dto';
import { UsersExistsAdaptor } from '../../domain/adapter/users.exists.adaptor';
import {
  ALREADY_ACCOUNT_ID_EXISTS,
  ALREADY_PHONE_EXISTS,
} from '../../../common/constants/http/errors/409';
import { UsersRegisterAdaptorOutputDto } from '../../outbound/dtos/users.register.adaptor.output.dto';

@Injectable()
export class UsersRegisterUseCase implements UsersRegisterAdaptor {
  constructor(
    @Inject('EXISTS')
    private readonly userService: UsersExistsAdaptor,
    @Inject('REGISTER')
    private readonly repository: UsersRegisterAdaptor,
  ) {}

  public async register(
    dto: UsersRegisterAdaptorInputDto,
  ): Promise<UsersRegisterAdaptorOutputDto> {
    const {
      response: { accountId, phone },
    } = await this.userService.exists(dto);

    if (accountId) throw new ConflictException(ALREADY_ACCOUNT_ID_EXISTS);
    if (phone) throw new ConflictException(ALREADY_PHONE_EXISTS);

    return await this.repository.register(dto);
  }
}
