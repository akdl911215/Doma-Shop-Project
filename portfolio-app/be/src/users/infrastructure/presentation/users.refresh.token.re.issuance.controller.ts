import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  Controller,
  Get,
  Inject,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { User } from '../../domain/service/user.decorator';
import { UsersModel } from '../../domain/entity/users.model';
import { BaseOutputDto } from '../../../common/outbound/dtos/base.output.dto';
import { RefreshTokenGuard } from '../token/guards/jwt.refresh.guard';
import { TWO_HUNDRED_OK } from '../../../common/constants/http/success/200';
import {
  BAD_REQUEST,
  NOT_MATCH_REFRESH_TOKEN,
} from '../../../common/constants/http/errors/400';
import { UNAUTHORIZED } from '../../../common/constants/http/errors/401';
import { INTERNAL_SERVER_ERROR } from '../../../common/constants/http/errors/500';
import { PasswordCheckingInterceptor } from '../../interceptors/password.checking.interceptor';
import { UsersRefreshTokenReIssuanceAdaptor } from '../../domain/adapter/users.refresh.token.re.issuance.adaptor';

@ApiTags('users')
@Controller('users')
@UseInterceptors(PasswordCheckingInterceptor)
export class UsersRefreshTokenReIssuanceController {
  constructor(
    @Inject('USE_CASE_REFRESH_TOKEN_RE_ISSUANCE')
    private readonly useCase: UsersRefreshTokenReIssuanceAdaptor,
  ) {}

  @UseGuards(RefreshTokenGuard)
  @ApiBearerAuth('refresh_token')
  @Get('/refresh/token')
  @ApiOperation({
    summary: 'USER REFRESH TOKEN RE ISSUANCE API',
    description: '유저 리프레쉬 토큰 재발급 절차',
  })
  @ApiResponse({ status: 200, description: `${TWO_HUNDRED_OK}` })
  @ApiResponse({
    status: 400,
    description: `${NOT_MATCH_REFRESH_TOKEN}, ${BAD_REQUEST}`,
  })
  @ApiResponse({ status: 401, description: `${UNAUTHORIZED}` })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  private async refreshTokenReIssuance(
    @User() userModel: UsersModel,
  ): Promise<BaseOutputDto<UsersModel>> {
    const reIssuance = await this.useCase.refresh({
      user: userModel,
    });
    return { response: userModel };
  }
}
