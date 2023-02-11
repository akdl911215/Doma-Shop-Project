import {
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  UseGuards,
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { UsersProfileAdaptor } from "../../domain/adaptor/users.profile.adaptor";
import { TWO_HUNDRED_OK } from "../../../common/constants/http/success/200";
import { NO_MATCH_USER_ID } from "../../../common/constants/http/errors/400";
import { NOTFOUND_USER } from "../../../common/constants/http/errors/404";
import { INTERNAL_SERVER_ERROR } from "../../../common/constants/http/errors/500";
import { UsersProfileAdaptorOutputDto } from "../../outbound/dtos/users.profile.adaptor.output.dto";
import { AccessTokenGuard } from "../../../common/infrastructures/token/guard/jwt.access.guard";

@Controller("users")
@ApiTags("users")
export class UsersProfileController {
  constructor(
    @Inject("USERS_PROFILE") private readonly useCase: UsersProfileAdaptor
  ) {}

  @UseGuards(AccessTokenGuard)
  @ApiBearerAuth("access_token")
  @Get("/:id")
  @ApiConsumes("application/x-www-form-urlencoded")
  @ApiOperation({
    summary: "USER PROFILE API",
    description: "유저 정보 1개 검색",
  })
  @ApiResponse({ status: 200, description: `${TWO_HUNDRED_OK}` })
  @ApiResponse({ status: 400, description: `${NO_MATCH_USER_ID}` })
  @ApiResponse({ status: 404, description: `${NOTFOUND_USER}` })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  private async profile(
    @Param("id", ParseUUIDPipe) id: string
  ): Promise<UsersProfileAdaptorOutputDto> {
    return await this.useCase.profile({ id });
  }
}
