import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Controller, Get, Inject, Param } from "@nestjs/common";
import { INTERNAL_SERVER_ERROR } from "../../../_common/constants/http/errors/500";
import { TWO_HUNDRED_OK } from "../../../_common/constants/http/success/200";
import { UsersExistsUserIdAdaptor } from "../../domain/adaptors/users.exists.user.id.adaptor";
import { ALREADY_USER_ID_EXISTS } from "../../../_common/constants/http/errors/409";
import { UsersExistsUserIdAdaptorInputDto } from "../../inbound/dtos/users.exists.user.id.adaptor.input.dto";
import { UsersExistsUserIdAdaptorOutputDto } from "../../outbound/dtos/users.exists.user.id.adaptor.output.dto";

@ApiTags("users")
@Controller("users")
export class UsersExistsUserIdController {
  constructor(
    @Inject("USE_CASE_EXISTS_USER_ID")
    private readonly useCase: UsersExistsUserIdAdaptor
  ) {}

  @Get("/exists/userId/:userId")
  @ApiOperation({
    summary: "USER USER ID EXISTS API",
    description: "유저 아이디 존재 유무 조회 절차",
  })
  @ApiResponse({ status: 200, description: `${TWO_HUNDRED_OK}` })
  @ApiResponse({ status: 409, description: `${ALREADY_USER_ID_EXISTS}` })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  private async existsAccountId(
    @Param() dto: UsersExistsUserIdAdaptorInputDto
  ): Promise<UsersExistsUserIdAdaptorOutputDto> {
    return await this.useCase.existsUserId(dto);
  }
}
