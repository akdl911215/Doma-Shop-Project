import { Body, Controller, Inject, Patch, UseGuards } from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { UsersUpdateAdaptor } from "../../domain/adaptor/users.update.adaptor";
import { TWO_HUNDRED_OK } from "../../../common/constants/http/success/200";
import { NO_MATCH_USER_ID } from "../../../common/constants/http/errors/400";
import {
  NOTFOUND_BOARD,
  NOTFOUND_USER,
} from "../../../common/constants/http/errors/404";
import { UPDATE_FAILED } from "../../../common/constants/http/errors/409";
import { INTERNAL_SERVER_ERROR } from "../../../common/constants/http/errors/500";
import { UsersUpdateAdaptorInputDto } from "../../inbound/dtos/users.update.adaptor.input.dto";
import { UsersUpdateAdaptorOutputDto } from "../../outbound/dtos/users.update.adaptor.output.dto";
import { AccessTokenGuard } from "../../../common/infrastructures/token/guard/jwt.access.guard";

@Controller("users")
@ApiTags("users")
export class UsersUpdateController {
  constructor(
    @Inject("USERS_UPDATE") private readonly useCase: UsersUpdateAdaptor
  ) {}

  @UseGuards(AccessTokenGuard)
  @ApiBearerAuth("access_token")
  @Patch("/update")
  @ApiConsumes("application/x-www-form-urlencoded")
  @ApiOperation({
    summary: "USER UPDATE API",
    description: "유저 정보 1개 수정",
  })
  @ApiResponse({ status: 200, description: `${TWO_HUNDRED_OK}` })
  @ApiResponse({ status: 400, description: `${NO_MATCH_USER_ID}` })
  @ApiResponse({
    status: 404,
    description: `${NOTFOUND_USER}, ${NOTFOUND_BOARD}`,
  })
  @ApiResponse({
    status: 409,
    description: `${UPDATE_FAILED}`,
  })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  private async update(
    @Body() dto: UsersUpdateAdaptorInputDto
  ): Promise<UsersUpdateAdaptorOutputDto> {
    return await this.useCase.update(dto);
  }
}
