import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { Controller, Inject, Patch, UseGuards } from "@nestjs/common";
import { NOTFOUND_USER } from "../../../_common/constants/http/errors/404";
import { INTERNAL_SERVER_ERROR } from "../../../_common/constants/http/errors/500";
import { UsersLogoutAdaptorOutputDto } from "../../outbound/dtos/users.logout.adaptor.output.dto";
import { UsersModel } from "../../domain/entity/users.model";
import { TWO_HUNDRED_OK } from "../../../_common/constants/http/success/200";
import { UsersLogoutAdaptor } from "../../domain/adaptor/users.logout.adaptor";
import { User } from "../../../_common/decorators/user.decorator";
import { RefreshTokenGuard } from "../../../_common/infrastructures/token/guard/jwt.refresh.guard";

@ApiTags("users")
@Controller("users")
export class UsersLogoutController {
  constructor(
    @Inject("SERVICE_LOGOUT") private readonly service: UsersLogoutAdaptor
  ) {}

  @Patch("/logout")
  @UseGuards(RefreshTokenGuard)
  @ApiBearerAuth("refresh_token")
  @ApiOperation({ summary: "USER LOGOUT API", description: "로그아웃 절차" })
  @ApiResponse({ status: 200, description: `${TWO_HUNDRED_OK}` })
  @ApiResponse({ status: 404, description: `${NOTFOUND_USER}` })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  private async logout(
    @User() user: UsersModel
  ): Promise<UsersLogoutAdaptorOutputDto> {
    const { id } = user;
    return await this.service.logout({ id });
  }
}
