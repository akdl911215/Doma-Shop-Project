import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  Body,
  Controller,
  Inject,
  Patch,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CREATE_SUCCESS } from '../../../common/constants/http/success/201';
import { INTERNAL_SERVER_ERROR } from '../../../common/constants/http/errors/500';
import { UsersUploadProfileRegisterAdaptorInputDto } from '../../inbound/dtos/users.upload.profile.register.adaptor.input.dto';
import { UsersUploadProfileRegisterAdaptorOutputDto } from '../../outbound/dtos/users.upload.profile.register.adaptor.output.dto';
import { UsersUploadProfileRegisterService } from '../../domain/service/users.upload.profile.register.service';
import { User } from '../../domain/service/user.decorator';
import { UsersModel } from '../../domain/entity/users.model';
import { AccessTokenGuard } from '../token/guards/jwt.access.guard';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('profile')
@Controller('profile')
export class UsersUploadProfileRegisterController {
  constructor(
    @Inject('SERVICE_PROFILE_REGISTER')
    private readonly useCase: UsersUploadProfileRegisterService,
  ) {}

  @Patch('/')
  @UseGuards(AccessTokenGuard)
  @UseInterceptors(FileInterceptor('file'))
  @ApiBearerAuth('access_token')
  @ApiConsumes('multipart/form-data')
  @ApiOperation({
    summary: 'USER PROFILE IMAGE REGISTER API',
    description: '유저 프로필 등록 절차',
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiResponse({ status: 201, description: `${CREATE_SUCCESS}` })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  private async register(
    @User() user: UsersModel,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<UsersUploadProfileRegisterAdaptorOutputDto> {
    return await this.useCase.register({ user, file });
  }
}
