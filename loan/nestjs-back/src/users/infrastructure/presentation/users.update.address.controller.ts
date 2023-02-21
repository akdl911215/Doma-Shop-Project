import {
  ApiBearerAuth,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import {
  Body,
  Controller,
  Inject,
  Patch,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { TWO_HUNDRED_OK } from "../../../common/constants/http/success/200";
import { NOTFOUND_USER } from "../../../common/constants/http/errors/404";
import { UPDATE_FAILED } from "../../../common/constants/http/errors/409";
import { INTERNAL_SERVER_ERROR } from "../../../common/constants/http/errors/500";
import { UsersModel } from "../../domain/entity/users.model";
import { User } from "../../../common/decorators/user.decorator";
import { AccessTokenGuard } from "../../../common/infrastructures/token/guard/jwt.access.guard";
import { UsersUpdateAddressAdaptor } from "../../domain/adaptor/users.update.address.adaptor";
import { UsersUpdateAddressAdaptorInputDto } from "../../inbound/dtos/users.update.address.adaptor.input.dto";
import { UsersUpdateAddressAdaptorOutputDto } from "../../outbound/dtos/users.update.address.adaptor.output.dto";
import { PasswordCheckingInterceptor } from "../../interceptor/password.checking.interceptor";

@ApiTags("users")
@Controller("users")
@UseGuards(AccessTokenGuard)
@UseInterceptors(PasswordCheckingInterceptor)
export class UsersUpdateAddressController {
  constructor(
    @Inject("USE_CASE_UPDATE_ADDRESS")
    private readonly useCase: UsersUpdateAddressAdaptor
  ) {}

  @ApiBearerAuth("access_token")
  @Patch("/update/address")
  @ApiConsumes("application/x-www-form-urlencoded")
  @ApiOperation({
    summary: "USER ADDRESS MODIFY API",
    description: "유저 주소 정보 1개 수정",
  })
  @ApiResponse({ status: 200, description: `${TWO_HUNDRED_OK}` })
  @ApiResponse({ status: 404, description: `${NOTFOUND_USER}` })
  @ApiResponse({ status: 409, description: `${UPDATE_FAILED}` })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  private async updateAddress(
    @Body() request: UsersUpdateAddressAdaptorInputDto,
    @User() user: UsersModel
  ): Promise<UsersUpdateAddressAdaptorOutputDto> {
    const { address } = request;
    const { id } = user;
    console.log("1", address, id);
    return await this.useCase.updateAddress({ address, id });
  }
}
