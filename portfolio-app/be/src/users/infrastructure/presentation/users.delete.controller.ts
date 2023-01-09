import { Body, Controller, Delete, Inject, UseGuards } from '@nestjs/common';
import { UsersDeleteAdaptor } from '../../domain/adapter/users.delete.adaptor';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TWO_HUNDRED_OK } from '../../../common/constants/http/success/200';
import { TWO_HUNDRED_FOUR_DELETE_SUCCESS } from '../../../common/constants/http/success/204';
import { NO_MATCH_USER_ID } from '../../../common/constants/http/errors/400';
import { NOTFOUND_USER } from '../../../common/constants/http/errors/404';
import { INTERNAL_SERVER_ERROR } from '../../../common/constants/http/errors/500';
import { User } from '../../domain/service/user.decorator';
import { UsersModel } from '../../domain/entity/users.model';
import { AccessTokenGuard } from '../token/guards/jwt.access.guard';
import { UsersDeleteAdaptorOutputDto } from '../../outbound/dtos/users.delete.adaptor.output.dto';
import { UsersDeleteAdaptorInputDto } from '../../inbound/dtos/users.delete.adaptor.input.dto';

@ApiTags('users')
@Controller('users')
export class UsersDeleteController {
  constructor(
    @Inject('USE_CASE_DELETE')
    private readonly useCase: UsersDeleteAdaptor,
  ) {}

  @UseGuards(AccessTokenGuard)
  @ApiBearerAuth('access_token')
  @Delete('/')
  @ApiConsumes('application/x-www-form-urlencoded')
  @ApiOperation({
    summary: 'USER DELETE API',
    description: '아이디 1개 삭제',
  })
  @ApiResponse({ status: 200, description: `${TWO_HUNDRED_OK}` })
  @ApiResponse({
    status: 204,
    description: `${TWO_HUNDRED_FOUR_DELETE_SUCCESS}`,
  })
  @ApiResponse({ status: 400, description: `${NO_MATCH_USER_ID}` })
  @ApiResponse({
    status: 404,
    description: `${NOTFOUND_USER}`,
  })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  @ApiBody({ type: UsersDeleteAdaptorInputDto })
  private async delete(
    @Body() dto: UsersDeleteAdaptorInputDto,
    @User() user: UsersModel,
  ): Promise<UsersDeleteAdaptorOutputDto> {
    const { id } = dto;
    return await this.useCase.delete({ requestUser: { id }, user });
  }
}
