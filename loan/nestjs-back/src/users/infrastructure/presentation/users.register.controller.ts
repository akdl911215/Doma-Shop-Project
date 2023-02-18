import {
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import {
  Body,
  Controller,
  Inject,
  Post,
  UseInterceptors,
} from "@nestjs/common";
import { CREATE_SUCCESS } from "../../../common/constants/http/success/201";
import {
  ALREADY_PHONE_EXISTS,
  ALREADY_USER_ID_EXISTS,
} from "../../../common/constants/http/errors/409";
import { INTERNAL_SERVER_ERROR } from "../../../common/constants/http/errors/500";
import { UsersRegisterAdaptorInputDto } from "../../inbound/dtos/users.register.adaptor.input.dto";
import { UsersRegisterAdaptorOutputDto } from "../../outbound/dtos/users.register.adaptor.output.dto";
import { UsersRegisterAdaptor } from "../../domain/adaptor/users.register.adaptor";
import { PasswordCheckingInterceptor } from "../../interceptor/password.checking.interceptor";
import { CONFIRM_REQUIRED_USER_INFORMATION } from "../../../common/constants/http/errors/400";

@ApiTags("users")
@Controller("users")
// @UseInterceptors(PasswordCheckingInterceptor)
export class UsersRegisterController {
  constructor(
    @Inject("USE_CASE_REGISTER")
    private readonly useCase: UsersRegisterAdaptor
  ) {}

  @Post("/register")
  @ApiConsumes("application/x-www-form-urlencoded")
  @ApiOperation({ summary: "USER REGISTER API", description: "회원 가입 절차" })
  @ApiResponse({ status: 201, description: `${CREATE_SUCCESS}` })
  @ApiResponse({
    status: 400,
    description: `${CONFIRM_REQUIRED_USER_INFORMATION}`,
  })
  @ApiResponse({
    status: 409,
    description: `${ALREADY_USER_ID_EXISTS}, ${ALREADY_PHONE_EXISTS}`,
  })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  @ApiBody({ type: UsersRegisterAdaptorInputDto })
  private async register(
    @Body() dto: UsersRegisterAdaptorInputDto
  ): Promise<UsersRegisterAdaptorOutputDto> {
    return await this.useCase.register(dto);
  }
}
