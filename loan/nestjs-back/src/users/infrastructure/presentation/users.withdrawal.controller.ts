import { Controller, Delete, Inject, Param, ParseUUIDPipe, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiConsumes, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UsersWithdrawalAdaptor } from "../../domain/adaptor/users.withdrawal.adaptor";
import { AccessTokenGuard } from "../../../common/infrastructures/token/guards/access.token.guard";
import { TWO_HUNDRED_OK } from "../../../common/constants/http/success/200";
import { TWO_HUNDRED_FOUR_DELETE_SUCCESS } from "../../../common/constants/http/success/204";
import { NO_MATCH_USER_ID } from "../../../common/constants/http/errors/400";
import { NOTFOUND_BOARD, NOTFOUND_BOARD_COMMENT, NOTFOUND_USER } from "../../../common/constants/http/errors/404";
import { INTERNAL_SERVER_ERROR } from "../../../common/constants/http/errors/500";
import { UsersWithdrawalAdaptorOutputDto } from "../../outbound/dtos/users.withdrawal.adaptor.output.dto";

@Controller('users')
@ApiTags('users')
export class UsersWithdrawalController {
  constructor(@Inject('USERS_WITHDRAWAL') private readonly useCase: UsersWithdrawalAdaptor) {}

  @UseGuards(AccessTokenGuard)
  @ApiBearerAuth("access_token")
  @Delete("/:id")
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
  @ApiResponse({ status: 400, description: `${NO_MATCH_USER_ID}` })
  @ApiResponse({
    status: 404,
    description: `${NOTFOUND_USER}, ${NOTFOUND_BOARD}, ${NOTFOUND_BOARD_COMMENT}`,
  })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  private async withdrawal(@Param('id', ParseUUIDPipe) id: string): Promise<UsersWithdrawalAdaptorOutputDto> {
    return await this.useCase.withdrawal({id});
  }
}