import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Controller, Get, Inject, Param } from "@nestjs/common";
import { ALREADY_PHONE_EXISTS } from "../../../common/constants/http/errors/409";
import { INTERNAL_SERVER_ERROR } from "../../../common/constants/http/errors/500";
import { TWO_HUNDRED_OK } from "../../../common/constants/http/success/200";
import { UsersExistsPhoneAdaptor } from "../../domain/adaptor/users.exists.phone.adaptor";
import { UsersExistsPhoneAdaptorOutputDto } from "../../outbound/dtos/users.exists.phone.adaptor.output.dto";
import { UsersExistsPhoneAdaptorInputDto } from "../../inbound/dtos/users.exists.phone.adaptor.input.dto";

@ApiTags("users")
@Controller("users")
export class UsersExistsPhoneController {
  constructor(
    @Inject("USE_CASE_EXISTS_PHONE")
    private readonly useCase: UsersExistsPhoneAdaptor
  ) {}

  @Get("/exists/phone/:phone")
  @ApiOperation({
    summary: "USER PHONE EXISTS API",
    description: "유저 핸드폰 존재 유무 조회 절차",
  })
  @ApiResponse({ status: 200, description: `${TWO_HUNDRED_OK}` })
  @ApiResponse({
    status: 409,
    description: `${ALREADY_PHONE_EXISTS}`,
  })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  private async existsPhone(
    @Param() dto: UsersExistsPhoneAdaptorInputDto
  ): Promise<UsersExistsPhoneAdaptorOutputDto> {
    return await this.useCase.existsPhone(dto);
  }
}
