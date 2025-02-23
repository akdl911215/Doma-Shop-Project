import {
  Body,
  Controller,
  Inject,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UsersRegisterAdaptor } from '../../domain/adapter/users.register.adaptor';
import { UsersRegisterAdaptorInputDto } from '../../inbound/dtos/users.register.adaptor.input.dto';
import { CREATE_SUCCESS } from '../../../common/constants/http/success/201';
import {
  ALREADY_ACCOUNT_ID_EXISTS,
  ALREADY_PHONE_EXISTS,
} from '../../../common/constants/http/errors/409';
import { INTERNAL_SERVER_ERROR } from '../../../common/constants/http/errors/500';
import { PasswordCheckingInterceptor } from '../../interceptors/password.checking.interceptor';
import { UsersRegisterAdaptorOutputDto } from '../../outbound/dtos/users.register.adaptor.output.dto';

@ApiTags('users')
@Controller('users')
@UseInterceptors(PasswordCheckingInterceptor)
export class UsersRegisterController {
  constructor(
    @Inject('USE_CASE_REGISTER')
    private readonly useCase: UsersRegisterAdaptor,
  ) {}

  @Post('/register')
  @ApiConsumes('application/x-www-form-urlencoded')
  @ApiOperation({ summary: 'USER REGISTER API', description: '회원 가입 절차' })
  @ApiResponse({ status: 201, description: `${CREATE_SUCCESS}` })
  @ApiResponse({
    status: 409,
    description: `${ALREADY_ACCOUNT_ID_EXISTS}, ${ALREADY_PHONE_EXISTS}`,
  })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  @ApiBody({ type: UsersRegisterAdaptorInputDto })
  private async register(
    @Body() dto: UsersRegisterAdaptorInputDto,
  ): Promise<UsersRegisterAdaptorOutputDto> {
    return await this.useCase.register(dto);
  }
}
