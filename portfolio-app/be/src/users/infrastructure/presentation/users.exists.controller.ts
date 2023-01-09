import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Inject, Post } from '@nestjs/common';
import { UsersExistsAdaptor } from '../../domain/adapter/users.exists.adaptor';
import {
  ALREADY_ACCOUNT_ID_EXISTS,
  ALREADY_PHONE_EXISTS,
} from '../../../common/constants/http/errors/409';
import { INTERNAL_SERVER_ERROR } from '../../../common/constants/http/errors/500';
import { UsersExistsAdaptorInputDto } from '../../inbound/dtos/users.exists.adaptor.input.dto';
import { UsersExistsAdaptorOutputDto } from '../../outbound/dtos/users.exists.adaptor.output.dto';
import { TWO_HUNDRED_OK } from '../../../common/constants/http/success/200';

@ApiTags('users')
@Controller('users')
export class UsersExistsController {
  constructor(
    @Inject('USE_CASE_EXISTS')
    private readonly useCase: UsersExistsAdaptor,
  ) {}

  @Post('/exists')
  @ApiResponse({ status: 200, description: `${TWO_HUNDRED_OK}` })
  @ApiResponse({
    status: 409,
    description: `${ALREADY_ACCOUNT_ID_EXISTS}, ${ALREADY_PHONE_EXISTS}`,
  })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  @ApiBody({ type: UsersExistsAdaptorInputDto })
  private async exists(
    @Body() dto: UsersExistsAdaptorInputDto,
  ): Promise<UsersExistsAdaptorOutputDto> {
    return await this.useCase.exists(dto);
  }
}
