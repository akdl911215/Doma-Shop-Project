import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  Controller,
  Inject,
  Patch,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UsersUploadBackgroundRegisterService } from '../../domain/service/users.upload.background.register.service';
import { CREATE_SUCCESS } from '../../../common/constants/http/success/201';
import { INTERNAL_SERVER_ERROR } from '../../../common/constants/http/errors/500';
import { UsersUploadBackgroundRegisterAdaptorOutputDto } from '../../outbound/dtos/users.upload.background.register.adaptor.output.dto';
import { UsersModel } from '../../domain/entity/users.model';
import { User } from '../../domain/service/user.decorator';
import { AccessTokenGuard } from '../token/guards/jwt.access.guard';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('background')
@Controller('background')
export class UsersUploadBackgroundRegisterController {
  constructor(
    @Inject('SERVICE_BACKGROUND_REGISTER')
    private readonly useCase: UsersUploadBackgroundRegisterService,
  ) {}

  @Patch('/')
  @UseGuards(AccessTokenGuard)
  @UseInterceptors(FileInterceptor('file'))
  @ApiBearerAuth('access_token')
  @ApiConsumes('multipart/form-data')
  @ApiOperation({
    summary: 'USER BACKGROUND IMAGE REGISTER API',
    description: '유저 배경화면 등록 절차',
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
  ): Promise<UsersUploadBackgroundRegisterAdaptorOutputDto> {
    return await this.useCase.register({ user, file });
  }
}
