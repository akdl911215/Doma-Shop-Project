import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Controller, Get, Inject, Param } from "@nestjs/common";
import { TWO_HUNDRED_OK } from "../../../_common/constants/http/success/200";
import { ALREADY_NICKNAME_EXISTS } from "../../../_common/constants/http/errors/409";
import { INTERNAL_SERVER_ERROR } from "../../../_common/constants/http/errors/500";
import { UsersExistsNicknameAdaptorInputDto } from "../../inbound/dtos/users.exists.nickname.adaptor.input.dto";
import { UsersExistsNicknameAdaptor } from "../../domain/adaptor/users.exists.nickname.adaptor";
import { UsersExistsNicknameOutputDto } from "../../outbound/dtos/users.exists.nickname.adaptor.output.dto";

@ApiTags("users")
@Controller("users")
export class UsersExistsNicknameController {
  constructor(
    @Inject("USE_CASE_EXISTS_NICKNAME")
    private readonly useCase: UsersExistsNicknameAdaptor
  ) {}

  @Get("/exists/nickname/:nickname")
  @ApiOperation({
    summary: "USER NICKNAME EXISTS API",
    description: "유저 닉네임 존재 유무 조회 절차",
  })
  @ApiResponse({ status: 200, description: `${TWO_HUNDRED_OK}` })
  @ApiResponse({ status: 409, description: `${ALREADY_NICKNAME_EXISTS}` })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  private async existsNickname(
    @Param() dto: UsersExistsNicknameAdaptorInputDto
  ): Promise<UsersExistsNicknameOutputDto> {
    return await this.useCase.existsNickname(dto);
  }
}
