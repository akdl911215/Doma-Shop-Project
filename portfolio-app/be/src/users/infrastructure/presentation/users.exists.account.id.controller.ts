import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ALREADY_ACCOUNT_ID_EXISTS } from '../../../common/constants/http/errors/409';
import { INTERNAL_SERVER_ERROR } from '../../../common/constants/http/errors/500';
import { UsersExistsAccountIdAdaptorInputDto } from '../../inbound/dtos/users.exists.account.id.adaptor.input.dto';
import { UsersExistsAccountIdAdaptorOutputDto } from '../../outbound/dtos/users.exists.account.id.adaptor.output.dto';
import { UsersExistsAccountIdAdaptor } from '../../domain/adapter/users.exists.account.id.adaptor';
import { TWO_HUNDRED_OK } from '../../../common/constants/http/success/200';
import { NOTFOUND_ACCOUNT_ID } from '../../../common/constants/http/errors/404';

@ApiTags('users')
@Controller('users')
export class UsersExistsAccountIdController {
  constructor(
    @Inject('USE_CASE_EXISTS_ACCOUNT_ID')
    private readonly useCase: UsersExistsAccountIdAdaptor,
  ) {}

  @Get('/exists/accountId/:accountId')
  @ApiOperation({
    summary: 'USER ACCOUNT ID EXISTS API',
    description: '유저 아이디 존재 유무 조회 절차',
  })
  @ApiResponse({ status: 200, description: `${TWO_HUNDRED_OK}` })
  @ApiResponse({
    status: 409,
    description: `${ALREADY_ACCOUNT_ID_EXISTS}`,
  })
  @ApiResponse({ status: 404, description: `${NOTFOUND_ACCOUNT_ID}` })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  private async existsAccountId(
    @Param() dto: UsersExistsAccountIdAdaptorInputDto,
  ): Promise<UsersExistsAccountIdAdaptorOutputDto> {
    return await this.useCase.existsAccountId(dto);
  }
}
