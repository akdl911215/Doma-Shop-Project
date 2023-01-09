import { UsersRefreshTokenReIssuanceAdaptorInputDto } from '../../inbound/dtos/users.refresh.token.re.issuance.adaptor.input.dto';
import { UsersRefreshTokenReIssuanceAdaptorOutputDto } from '../../outbound/dtos/users.refresh.token.re.issuance.adaptor.output.dto';

export interface UsersRefreshTokenReIssuanceAdaptor {
  readonly refresh: (
    dto: UsersRefreshTokenReIssuanceAdaptorInputDto,
  ) => Promise<UsersRefreshTokenReIssuanceAdaptorOutputDto>;
}
