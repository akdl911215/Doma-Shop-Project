import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { UsersRegisterAdaptorInputDto } from '../../inbound/dtos/users.register.adaptor.input.dto';
import {
  ALREADY_ACCOUNT_ID_EXISTS, ALREADY_NICKNAME_EXISTS,
  ALREADY_PHONE_EXISTS
} from "../../../common/constants/http/errors/409";
import { UsersRegisterAdaptorOutputDto } from '../../outbound/dtos/users.register.adaptor.output.dto';
import { UsersRegisterAdaptor } from "../../domain/adaptor/users.register.adaptor";
import { UsersExistsAdaptor } from "../../domain/adaptor/users.exists.adaptor";

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
      response: { accountId, phone, nickname },
    } = await this.userService.exists(dto);

    if (accountId) throw new ConflictException(ALREADY_ACCOUNT_ID_EXISTS);
    if (nickname) throw new ConflictException(ALREADY_NICKNAME_EXISTS);
    if (phone) throw new ConflictException(ALREADY_PHONE_EXISTS);

    return await this.repository.register(dto);
  }
}
