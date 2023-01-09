import { Inject, Injectable } from '@nestjs/common';
import { UsersExistsAccountIdAdaptor } from '../../domain/adapter/users.exists.account.id.adaptor';
import { UsersExistsAccountIdAdaptorInputDto } from '../../inbound/dtos/users.exists.account.id.adaptor.input.dto';
import { UsersExistsAccountIdAdaptorOutputDto } from '../../outbound/dtos/users.exists.account.id.adaptor.output.dto';

@Injectable()
export class UsersExistsAccountIdUseCase
  implements UsersExistsAccountIdAdaptor
{
  constructor(
    @Inject('EXISTS_ACCOUNT_ID')
    private readonly repository: UsersExistsAccountIdAdaptor,
  ) {}

  public async existsAccountId(
    dto: UsersExistsAccountIdAdaptorInputDto,
  ): Promise<UsersExistsAccountIdAdaptorOutputDto> {
    const {
      response: { accountId },
    } = await this.repository.existsAccountId(dto);

    return {
      response: { accountId },
    };
  }
}
