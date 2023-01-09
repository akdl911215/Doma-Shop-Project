import {
  Controller,
  Get,
  Inject,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UsersProfileAdaptor } from '../../domain/adapter/users.profile.adaptor';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TWO_HUNDRED_OK } from '../../../common/constants/http/success/200';
import { NOTFOUND_USER } from '../../../common/constants/http/errors/404';
import { INTERNAL_SERVER_ERROR } from '../../../common/constants/http/errors/500';
import { User } from '../../domain/service/user.decorator';
import { UsersModel } from '../../domain/entity/users.model';
import { AccessTokenGuard } from '../token/guards/jwt.access.guard';
import { UsersProfileAdaptorOutputDto } from '../../outbound/dtos/users.profile.adaptor.output.dto';
import { PasswordCheckingInterceptor } from '../../interceptors/password.checking.interceptor';

@ApiTags('users')
@Controller('users')
@UseInterceptors(PasswordCheckingInterceptor)
export class UsersProfileController {
  constructor(
    @Inject('USE_CASE_PROFILE')
    private readonly useCase: UsersProfileAdaptor,
  ) {}

  @UseGuards(AccessTokenGuard)
  @ApiBearerAuth('access_token')
  @Get('/')
  @ApiConsumes('application/x-www-form-urlencoded')
  @ApiOperation({
    summary: 'USER PROFILE API',
    description: '유저 프로필 조회 절차',
  })
  @ApiResponse({ status: 200, description: `${TWO_HUNDRED_OK}` })
  @ApiResponse({ status: 404, description: `${NOTFOUND_USER}` })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  private async usersProfile(
    @User() user: UsersModel,
  ): Promise<UsersProfileAdaptorOutputDto> {
    return await this.useCase.userProfile(user);
  }
}
