import {
  Body,
  Controller,
  Inject,
  Patch,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { TWO_HUNDRED_OK } from "../../../common/constants/http/success/200";
import { NO_MATCH_USER_ID } from "../../../common/constants/http/errors/400";
import { NOTFOUND_USER } from "../../../common/constants/http/errors/404";
import { UPDATE_FAILED } from "../../../common/constants/http/errors/409";
import { INTERNAL_SERVER_ERROR } from "../../../common/constants/http/errors/500";
import { UsersModel } from "../../domain/entity/users.model";
import { UsersUpdateAdaptorOutputDto } from "../../outbound/dtos/users.update.adaptor.output.dto";
import { UsersUpdatePhoneAdaptorInputDto } from "../../inbound/dtos/users.update.phone.adaptor.input.dto";
import { UsersUpdatePhoneAdaptor } from "../../domain/adaptor/users.update.phone.adaptor";
import { User } from "../../../common/decorators/user.decorator";
import { PasswordCheckingInterceptor } from "../../interceptor/password.checking.interceptor";
import { AccessTokenGuard } from "../../../common/infrastructures/token/guard/jwt.access.guard";

@ApiTags("users")
@Controller("users")
@UseInterceptors(PasswordCheckingInterceptor)
export class UsersUpdatePhoneController {
  constructor(
    @Inject("USE_CASE_UPDATE_PHONE")
    private readonly useCase: UsersUpdatePhoneAdaptor
  ) {}

  @UseGuards(AccessTokenGuard)
  @ApiBearerAuth("access_token")
  @Patch("/update/phone")
  @ApiConsumes("application/x-www-form-urlencoded")
  @ApiOperation({
    summary: "USER PHONE MODIFY API",
    description: "유저 휴대폰 정보 1개 수정",
  })
  @ApiResponse({ status: 200, description: `${TWO_HUNDRED_OK}` })
  @ApiResponse({ status: 400, description: `${NO_MATCH_USER_ID}` })
  @ApiResponse({ status: 404, description: `${NOTFOUND_USER}` })
  @ApiResponse({ status: 409, description: `${UPDATE_FAILED}` })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  private async updatePhone(
    @Body() requestPhone: UsersUpdatePhoneAdaptorInputDto,
    @User() user: UsersModel
  ): Promise<UsersUpdateAdaptorOutputDto> {
    return await this.useCase.updatePhone({ requestPhone, user });
  }
}
