import { Inject, Injectable } from '@nestjs/common';
import { UsersRefreshTokenReIssuanceAdaptor } from '../../domain/adapter/users.refresh.token.re.issuance.adaptor';
import { UsersRefreshTokenReIssuanceAdaptorOutputDto } from '../../outbound/dtos/users.refresh.token.re.issuance.adaptor.output.dto';
import { UsersRefreshTokenReIssuanceAdaptorInputDto } from '../../inbound/dtos/users.refresh.token.re.issuance.adaptor.input.dto';

@Injectable()
export class UsersRefreshTokenReIssuanceUseCase
  implements UsersRefreshTokenReIssuanceAdaptor
{
  constructor(
    @Inject('REFRESH_TOKEN_RE_ISSUANCE')
    private readonly repository: UsersRefreshTokenReIssuanceAdaptor,
  ) {}

  public async refresh(
    dto: UsersRefreshTokenReIssuanceAdaptorInputDto,
  ): Promise<UsersRefreshTokenReIssuanceAdaptorOutputDto> {
    return await this.repository.refresh(dto);
  }
}
