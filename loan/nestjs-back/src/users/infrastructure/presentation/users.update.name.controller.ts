import {
  Body,
  Controller,
  Inject,
  Patch,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { TWO_HUNDRED_OK } from "../../../common/constants/http/success/200";
import { NOTFOUND_USER } from "../../../common/constants/http/errors/404";
import { UPDATE_FAILED } from "../../../common/constants/http/errors/409";
import { INTERNAL_SERVER_ERROR } from "../../../common/constants/http/errors/500";
import { UsersModel } from "../../domain/entity/users.model";
import { User } from "../../../common/decorators/user.decorator";
import { PasswordCheckingInterceptor } from "../../interceptor/password.checking.interceptor";
import { UsersUpdateNameAdaptor } from "../../domain/adaptor/users.update.name.adaptor";
import { UsersUpdateNameAdaptorInputDto } from "../../inbound/dtos/users.update.name.adaptor.input.dto";
import { UsersUpdateNameAdaptorOutputDto } from "../../outbound/dtos/users.update.name.adaptor.output.dto";
import { AccessTokenGuard } from "../token/guard/jwt.access.guard";

@ApiTags("users")
@Controller("users")
@UseInterceptors(PasswordCheckingInterceptor)
export class UsersUpdateNameController {
  constructor(
    @Inject("USE_CASE_UPDATE_NAME")
    private readonly useCase: UsersUpdateNameAdaptor
  ) {}

  @Patch("/update/name")
  @UseGuards(AccessTokenGuard)
  @ApiBearerAuth("access_token")
  @ApiConsumes("application/x-www-form-urlencoded")
  @ApiOperation({
    summary: "USER NAME MODIFY API",
    description: "유저 이름 정보 1개 수정",
  })
  @ApiResponse({ status: 200, description: `${TWO_HUNDRED_OK}` })
  @ApiResponse({ status: 404, description: `${NOTFOUND_USER}` })
  @ApiResponse({ status: 409, description: `${UPDATE_FAILED}` })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  private async updateName(
    @Body() request: UsersUpdateNameAdaptorInputDto,
    @User() user: UsersModel
  ): Promise<UsersUpdateNameAdaptorOutputDto> {
    const { name } = request;
    const { id } = user;
    return await this.useCase.updateName({ name, id });
  }
}
