import {
  Controller,
  Delete,
  Inject,
  Param,
  ParseUUIDPipe,
  Patch,
  UseGuards,
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { UsersWithdrawalAdaptor } from "../../domain/adaptors/users.withdrawal.adaptor";
import { TWO_HUNDRED_OK } from "../../../_common/constants/http/success/200";
import { TWO_HUNDRED_FOUR_DELETE_SUCCESS } from "../../../_common/constants/http/success/204";
import { NOTFOUND_USER } from "../../../_common/constants/http/errors/404";
import { INTERNAL_SERVER_ERROR } from "../../../_common/constants/http/errors/500";
import { UsersWithdrawalAdaptorOutputDto } from "../../outbound/dtos/users.withdrawal.adaptor.output.dto";
import { AccessTokenGuard } from "../../../_common/infrastructures/token/guard/jwt.access.guard";
import { UsersModel } from "../../domain/entity/users.model";
import { User } from "../../../_common/decorators/user.decorator";
import { UNIQUE_ID_REQUIRED } from "../../../_common/constants/http/errors/400";

@Controller("users")
@ApiTags("users")
export class UsersWithdrawalController {
  constructor(
    @Inject("USE_CASE_WITHDRAWAL")
    private readonly useCase: UsersWithdrawalAdaptor
  ) {}

  @UseGuards(AccessTokenGuard)
  @ApiBearerAuth("access_token")
  @Patch("/withdrawal")
  @ApiConsumes("application/x-www-form-urlencoded")
  @ApiOperation({
    summary: "USER WITHDRAWAL API",
    description: "아이디 1개 회원탈퇴",
  })
  @ApiResponse({ status: 200, description: `${TWO_HUNDRED_OK}` })
  @ApiResponse({
    status: 204,
    description: `${TWO_HUNDRED_FOUR_DELETE_SUCCESS}`,
  })
  @ApiResponse({ status: 400, description: `${UNIQUE_ID_REQUIRED}` })
  @ApiResponse({ status: 404, description: `${NOTFOUND_USER}` })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  private async withdrawal(
    @User() user: UsersModel
  ): Promise<UsersWithdrawalAdaptorOutputDto> {
    const { id } = user;
    return await this.useCase.withdrawal({ id });
  }
}
