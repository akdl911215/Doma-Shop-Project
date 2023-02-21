import {
  ApiBearerAuth,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { Body, Controller, Inject, Patch, UseGuards } from "@nestjs/common";
import { TWO_HUNDRED_OK } from "../../../common/constants/http/success/200";
import { NOTFOUND_USER } from "../../../common/constants/http/errors/404";
import { UPDATE_FAILED } from "../../../common/constants/http/errors/409";
import { INTERNAL_SERVER_ERROR } from "../../../common/constants/http/errors/500";
import { UsersModel } from "../../domain/entity/users.model";
import { User } from "../../../common/decorators/user.decorator";
import { AccessTokenGuard } from "../../../common/infrastructures/token/guard/jwt.access.guard";
import { UsersUpdatePasswordAdaptorInputDto } from "../../inbound/dtos/users.update.password.adaptor.input.dto";
import { UsersUpdatePasswordAdaptorOutputDto } from "../../outbound/dtos/users.update.password.adaptor.output.dto";
import { UsersUpdatePasswordAdaptor } from "../../domain/adaptor/users.update.password.adaptor";

@ApiTags("users")
@Controller("users")
export class UsersUpdatePasswordController {
  constructor(
    @Inject("USE_CASE_UPDATE_PASSWORD")
    private readonly useCase: UsersUpdatePasswordAdaptor
  ) {}

  @UseGuards(AccessTokenGuard)
  @ApiBearerAuth("access_token")
  @Patch("/update/password")
  @ApiConsumes("application/x-www-form-urlencoded")
  @ApiOperation({
    summary: "USER PASSWORD MODIFY API",
    description: "유저 비밀번호 정보 1개 수정",
  })
  @ApiResponse({ status: 200, description: `${TWO_HUNDRED_OK}` })
  @ApiResponse({ status: 404, description: `${NOTFOUND_USER}` })
  @ApiResponse({ status: 409, description: `${UPDATE_FAILED}` })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  private async updatePassword(
    @Body() request: UsersUpdatePasswordAdaptorInputDto,
    @User() user: UsersModel
  ): Promise<UsersUpdatePasswordAdaptorOutputDto> {
    const { password } = request;
    const { id } = user;
    return await this.useCase.updatePassword({ password, id });
  }
}
