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
import { NOTFOUND_USER } from "../../../common/constants/http/errors/404";
import { UPDATE_FAILED } from "../../../common/constants/http/errors/409";
import { INTERNAL_SERVER_ERROR } from "../../../common/constants/http/errors/500";
import { UsersModel } from "../../domain/entity/users.model";
import { User } from "../../../common/decorators/user.decorator";
import { PasswordCheckingInterceptor } from "../../interceptor/password.checking.interceptor";
import { AccessTokenGuard } from "../../../common/infrastructures/token/guard/jwt.access.guard";
import { UsersUpdateUserIdAdaptor } from "../../domain/adaptor/users.update.user.id.adaptor";
import { UsersUpdateUserIdAdaptorInputDto } from "../../inbound/dtos/users.update.user.id.adaptor.input.dto";
import { UsersUpdateUserIdAdaptorOutputDto } from "../../outbound/dtos/users.update.user.id.adaptor.output.dto";

@ApiTags("users")
@Controller("users")
@UseInterceptors(PasswordCheckingInterceptor)
export class UsersUpdateUserIdController {
  constructor(
    @Inject("USE_CASE_USER_ID")
    private readonly useCase: UsersUpdateUserIdAdaptor
  ) {}

  @UseGuards(AccessTokenGuard)
  @ApiBearerAuth("access_token")
  @Patch("/update/userId")
  @ApiConsumes("application/x-www-form-urlencoded")
  @ApiOperation({
    summary: "USER USER ID MODIFY API",
    description: "유저 아이디 정보 1개 수정",
  })
  @ApiResponse({ status: 200, description: `${TWO_HUNDRED_OK}` })
  @ApiResponse({ status: 404, description: `${NOTFOUND_USER}` })
  @ApiResponse({ status: 409, description: `${UPDATE_FAILED}` })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  private async updateUserId(
    @Body() request: UsersUpdateUserIdAdaptorInputDto,
    @User() user: UsersModel
  ): Promise<UsersUpdateUserIdAdaptorOutputDto> {
    const { userId } = request;
    const { id } = user;
    return await this.useCase.updateUserId({ userId, id });
  }
}
