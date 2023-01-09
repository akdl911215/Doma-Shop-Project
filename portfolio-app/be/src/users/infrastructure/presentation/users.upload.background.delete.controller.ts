import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Controller, Delete, Inject, UseGuards } from '@nestjs/common';
import { AccessTokenGuard } from '../token/guards/jwt.access.guard';
import { TWO_HUNDRED_OK } from '../../../common/constants/http/success/200';
import { TWO_HUNDRED_FOUR_DELETE_SUCCESS } from '../../../common/constants/http/success/204';
import { NOT_ALREADY_EXIST_BACKGROUND_IMAGE } from '../../../common/constants/http/errors/400';
import { NOTFOUND_USER } from '../../../common/constants/http/errors/404';
import { INTERNAL_SERVER_ERROR } from '../../../common/constants/http/errors/500';
import { User } from '../../domain/service/user.decorator';
import { UsersDeleteAdaptorOutputDto } from '../../outbound/dtos/users.delete.adaptor.output.dto';
import { UsersUploadBackgroundDeleteService } from '../../domain/service/users.upload.background.delete.service';
import { UsersUploadBackgroundDeleteAdaptorInputDto } from '../../inbound/dtos/users.upload.background.delete.adaptor.input.dto';

@ApiTags('background')
@Controller('background')
export class UsersUploadBackgroundDeleteController {
  constructor(
    @Inject('SERVICE_BACKGROUND_DELETE')
    private readonly useCase: UsersUploadBackgroundDeleteService,
  ) {}

  @UseGuards(AccessTokenGuard)
  @ApiBearerAuth('access_token')
  @Delete('/')
  @ApiOperation({
    summary: 'USER BACKGROUND IMAGE DELETE API',
    description: '유저 배경화면 삭제 절차',
  })
  @ApiResponse({ status: 200, description: `${TWO_HUNDRED_OK}` })
  @ApiResponse({
    status: 204,
    description: `${TWO_HUNDRED_FOUR_DELETE_SUCCESS}`,
  })
  @ApiResponse({
    status: 400,
    description: `${NOT_ALREADY_EXIST_BACKGROUND_IMAGE}`,
  })
  @ApiResponse({
    status: 404,
    description: `${NOTFOUND_USER}`,
  })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  private async delete(
    @User() dto: UsersUploadBackgroundDeleteAdaptorInputDto,
  ): Promise<UsersDeleteAdaptorOutputDto> {
    return await this.useCase.delete(dto);
  }
}
