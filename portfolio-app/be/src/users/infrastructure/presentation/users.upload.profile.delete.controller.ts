import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Body, Controller, Delete, Inject, UseGuards } from '@nestjs/common';
import { AccessTokenGuard } from '../token/guards/jwt.access.guard';
import { TWO_HUNDRED_OK } from '../../../common/constants/http/success/200';
import { TWO_HUNDRED_FOUR_DELETE_SUCCESS } from '../../../common/constants/http/success/204';
import { NO_MATCH_USER_ID } from '../../../common/constants/http/errors/400';
import { NOTFOUND_USER } from '../../../common/constants/http/errors/404';
import { INTERNAL_SERVER_ERROR } from '../../../common/constants/http/errors/500';
import { UsersDeleteAdaptorInputDto } from '../../inbound/dtos/users.delete.adaptor.input.dto';
import { User } from '../../domain/service/user.decorator';
import { UsersModel } from '../../domain/entity/users.model';
import { UsersDeleteAdaptorOutputDto } from '../../outbound/dtos/users.delete.adaptor.output.dto';
import { UsersUploadProfileDeleteService } from '../../domain/service/users.upload.profile.delete.service';
import { UsersUploadProfileDeleteAdaptorInputDto } from '../../inbound/dtos/users.upload.profile.delete.adaptor.input.dto';

@ApiTags('profile')
@Controller('profile')
export class UsersUploadProfileDeleteController {
  constructor(
    @Inject('SERVICE_PROFILE_DELETE')
    private readonly useCase: UsersUploadProfileDeleteService,
  ) {}

  @UseGuards(AccessTokenGuard)
  @ApiBearerAuth('access_token')
  @Delete('/')
  @ApiOperation({
    summary: 'USER PROFILE IMAGE DELETE API',
    description: '유저 프로필 삭제 절차',
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
  private async delete(
    @User() dto: UsersUploadProfileDeleteAdaptorInputDto,
  ): Promise<UsersDeleteAdaptorOutputDto> {
    return await this.useCase.delete(dto);
  }
}
