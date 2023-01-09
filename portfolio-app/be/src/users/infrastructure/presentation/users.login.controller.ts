import {
  Body,
  Controller,
  Inject,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { UsersLoginAdaptor } from '../../domain/adapter/users.login.adaptor';
import {
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { LOGIN_SUCCESS } from '../../../common/constants/http/success/201';
import { NO_MATCH_PASSWORD } from '../../../common/constants/http/errors/400';
import { NOTFOUND_USER } from '../../../common/constants/http/errors/404';
import { REFRESH_TOKEN_MODIFY_FAILED } from '../../../common/constants/http/errors/409';
import { INTERNAL_SERVER_ERROR } from '../../../common/constants/http/errors/500';
import { UsersLoginAdaptorInputDto } from '../../inbound/dtos/users.login.adaptor.input.dto';
import { UsersLoginAdaptorOutputDto } from '../../outbound/dtos/users.login.adaptor.output.dto';
import { PasswordCheckingInterceptor } from '../../interceptors/password.checking.interceptor';

@ApiTags('users')
@Controller('users')
@UseInterceptors(PasswordCheckingInterceptor)
export class UsersLoginController {
  constructor(
    @Inject('USE_CASE_LOGIN')
    private readonly useCase: UsersLoginAdaptor,
  ) {}

  @Post('/login')
  @ApiConsumes('application/x-www-form-urlencoded')
  @ApiOperation({ summary: 'USER LOGIN API', description: '로그인 절차' })
  @ApiResponse({ status: 201, description: `${LOGIN_SUCCESS}` })
  @ApiResponse({ status: 400, description: `${NO_MATCH_PASSWORD}` })
  @ApiResponse({ status: 404, description: `${NOTFOUND_USER}` })
  @ApiResponse({ status: 409, description: `${REFRESH_TOKEN_MODIFY_FAILED}` })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  @ApiBody({ type: UsersLoginAdaptorInputDto })
  private async login(
    @Body() inputUser: UsersLoginAdaptorInputDto,
  ): Promise<UsersLoginAdaptorOutputDto> {
    return await this.useCase.login(inputUser);
  }
}
