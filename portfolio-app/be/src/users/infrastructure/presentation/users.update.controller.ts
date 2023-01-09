import {
  Body,
  Controller,
  Inject,
  Patch,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UsersUpdateAdaptor } from '../../domain/adapter/users.update.adaptor';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TWO_HUNDRED_OK } from '../../../common/constants/http/success/200';
import { NO_MATCH_USER_ID } from '../../../common/constants/http/errors/400';
import { NOTFOUND_USER } from '../../../common/constants/http/errors/404';
import { UPDATE_FAILED } from '../../../common/constants/http/errors/409';
import { INTERNAL_SERVER_ERROR } from '../../../common/constants/http/errors/500';
import { UsersUpdateAdaptorInputDto } from '../../inbound/dtos/users.update.adaptor.input.dto';
import { User } from '../../domain/service/user.decorator';
import { UsersModel } from '../../domain/entity/users.model';
import { AccessTokenGuard } from '../token/guards/jwt.access.guard';
import { UsersUpdateAdaptorOutputDto } from '../../outbound/dtos/users.update.adaptor.output.dto';
import { PasswordCheckingInterceptor } from '../../interceptors/password.checking.interceptor';

@ApiTags('users')
@Controller('users')
@UseInterceptors(PasswordCheckingInterceptor)
export class UsersUpdateController {
  constructor(
    @Inject('USE_CASE_UPDATE')
    private readonly useCase: UsersUpdateAdaptor,
  ) {}

  @UseGuards(AccessTokenGuard)
  @ApiBearerAuth('access_token')
  @Patch('/update')
  @ApiConsumes('application/x-www-form-urlencoded')
  @ApiOperation({
    summary: 'USER MODIFY API',
    description: '유저 정보 1개 수정',
  })
  @ApiResponse({ status: 200, description: `${TWO_HUNDRED_OK}` })
  @ApiResponse({ status: 400, description: `${NO_MATCH_USER_ID}` })
  @ApiResponse({
    status: 404,
    description: `${NOTFOUND_USER}`,
  })
  @ApiResponse({
    status: 409,
    description: `${UPDATE_FAILED}`,
  })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  private async update(
    @Body() requestUser: UsersUpdateAdaptorInputDto,
    @User() user: UsersModel,
  ): Promise<UsersUpdateAdaptorOutputDto> {
    return await this.useCase.update({ requestUser, user });
  }
}
