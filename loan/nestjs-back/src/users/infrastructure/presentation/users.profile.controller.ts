import { Controller, Get, Inject, UseGuards } from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { UsersProfileAdaptor } from "../../domain/adaptor/users.profile.adaptor";
import { TWO_HUNDRED_OK } from "../../../_common/constants/http/success/200";
import {
  CONFIRM_REQUIRED_UNIQUE_ID_INFORMATION,
  NO_MATCH_USER_ID,
} from "../../../_common/constants/http/errors/400";
import { NOTFOUND_USER } from "../../../_common/constants/http/errors/404";
import { INTERNAL_SERVER_ERROR } from "../../../_common/constants/http/errors/500";
import { UsersProfileAdaptorOutputDto } from "../../outbound/dtos/users.profile.adaptor.output.dto";
import { AccessTokenGuard } from "../../../_common/infrastructures/token/guard/jwt.access.guard";
import { User } from "../../../_common/decorators/user.decorator";
import { UsersModel } from "../../domain/entity/users.model";

@Controller("users")
@ApiTags("users")
@UseGuards(AccessTokenGuard)
export class UsersProfileController {
  constructor(
    @Inject("USE_CASE_PROFILE") private readonly useCase: UsersProfileAdaptor
  ) {}

  @ApiBearerAuth("access_token")
  @Get("/")
  @ApiConsumes("application/x-www-form-urlencoded")
  @ApiOperation({
    summary: "USER PROFILE API",
    description: "유저 정보 1개 검색",
  })
  @ApiResponse({ status: 200, description: `${TWO_HUNDRED_OK}` })
  @ApiResponse({
    status: 400,
    description: `${NO_MATCH_USER_ID}, ${CONFIRM_REQUIRED_UNIQUE_ID_INFORMATION}`,
  })
  @ApiResponse({ status: 404, description: `${NOTFOUND_USER}` })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  private async profile(
    @User() user: UsersModel
  ): Promise<UsersProfileAdaptorOutputDto> {
    const { id } = user;

    return await this.useCase.profile({ id });
  }
}
