import {
  ApiBearerAuth,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { Body, Controller, Inject, Patch, UseGuards } from "@nestjs/common";
import { TWO_HUNDRED_OK } from "../../../common/constants/http/success/200";
import { NO_MATCH_USER_ID } from "../../../common/constants/http/errors/400";
import { NOTFOUND_USER } from "../../../common/constants/http/errors/404";
import { UPDATE_FAILED } from "../../../common/constants/http/errors/409";
import { INTERNAL_SERVER_ERROR } from "../../../common/constants/http/errors/500";
import { UsersModel } from "../../domain/entity/users.model";
import { AccessTokenGuard } from "../../../common/infrastructures/token/guards/access.token.guard";
import { User } from "../../../common/decorators/user.decorator";
import { UsersUpdateNicknameAdaptorInputDto } from "../../inbound/dtos/users.update.nickname.adaptor.input.dto";
import { UsersUpdateNicknameAdaptorOutputDto } from "../../outbound/dtos/users.update.nickname.adaptor.output.dto";
import { UsersUpdateNicknameAdaptor } from "../../domain/adaptor/users.update.nickname.adaptor";

@ApiTags("users")
@Controller("users")
export class UsersUpdateNicknameController {
  constructor(
    @Inject("USE_CASE_UPDATE_NICKNAME")
    private readonly useCase: UsersUpdateNicknameAdaptor
  ) {}

  @UseGuards(AccessTokenGuard)
  @ApiBearerAuth("access_token")
  @Patch("/update/nickname")
  @ApiConsumes("application/x-www-form-urlencoded")
  @ApiOperation({
    summary: "USER NICKNAME MODIFY API",
    description: "유저 닉네임 정보 1개 수정",
  })
  @ApiResponse({ status: 200, description: `${TWO_HUNDRED_OK}` })
  @ApiResponse({ status: 400, description: `${NO_MATCH_USER_ID}` })
  @ApiResponse({
    status: 404,
    description: `${NOTFOUND_USER}`,
  })
  @ApiResponse({
    status: 409,
    description: `${UPDATE_FAILED}`,
  })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  private async updateNickname(
    @Body() requestNickname: UsersUpdateNicknameAdaptorInputDto,
    @User() user: UsersModel
  ): Promise<UsersUpdateNicknameAdaptorOutputDto> {
    return await this.useCase.updateNickname({ requestNickname, user });
  }
}
