import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { UsersInterface } from "./interfaces/users.interface";
import {
  CREATE_SUCCESS,
  LOGIN_SUCCESS,
} from "../common/constants/http/success/201";
import {
  ALREADY_ACCOUNT_ID_EXISTS,
  ALREADY_PHONE_EXISTS,
  REFRESH_TOKEN_MODIFY_FAILED,
  UPDATE_FAILED,
} from "../common/constants/http/errors/409";
import { INTERNAL_SERVER_ERROR } from "../common/constants/http/errors/500";
import {
  RegisterInputUser,
  RegisterOutputUser,
} from "./dtos/users.register.dto";
import {
  NO_MATCH_PASSWORD,
  NO_MATCH_USER_ID,
  NOT_MATCH_REFRESH_TOKEN,
} from "../common/constants/http/errors/400";
import {
  NOTFOUND_BOARD,
  NOTFOUND_BOARD_COMMENT,
  NOTFOUND_USER,
} from "../common/constants/http/errors/404";
import { LoginInputUser, LoginOutputUser } from "./dtos/users.login.dto";
import { TWO_HUNDRED_OK } from "../common/constants/http/success/200";
import { AccessTokenGuard } from "../common/infrastructures/token/guards/access.token.guard";
import { FindOutputUser } from "./dtos/users.find.dto";
import { TWO_HUNDRED_FOUR_DELETE_SUCCESS } from "../common/constants/http/success/204";
import { DeleteInputUser, DeleteOutputUser } from "./dtos/users.delete.dto";
import { UsersBaseDto } from "./dtos/users.base.dto";
import { User } from "../common/decorators/user.decorator";
import { BaseOutputDto } from "../common/dtos/base.output.dto";
import { UNAUTHORIZED } from "../common/constants/http/errors/401";
import { RefreshTokenGuard } from "../common/infrastructures/token/guards/refresh.token.guard";
import { UpdateInputUser, UpdateOutputUser } from "./dtos/users.update.dto";

@ApiTags("users")
@Controller("users")
export class UsersController {
  constructor(
    @Inject("USERS_SERVICE") private readonly usersService: UsersInterface
  ) {}

  @Post("/register")
  @ApiConsumes("application/x-www-form-urlencoded")
  @ApiOperation({ summary: "USER REGISTER API", description: "회원 가입 절차" })
  @ApiResponse({ status: 201, description: `${CREATE_SUCCESS}` })
  @ApiResponse({
    status: 409,
    description: `${ALREADY_ACCOUNT_ID_EXISTS}, ${ALREADY_PHONE_EXISTS}`,
  })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  @ApiBody({ type: RegisterInputUser })
  private async register(
    @Body() user: RegisterInputUser
  ): Promise<RegisterOutputUser> {
    return await this.usersService.register(user);
  }

  @Post("/login")
  @ApiConsumes("application/x-www-form-urlencoded")
  @ApiOperation({ summary: "USER LOGIN API", description: "로그인 진행 절차" })
  @ApiResponse({ status: 201, description: `${LOGIN_SUCCESS}` })
  @ApiResponse({ status: 400, description: `${NO_MATCH_PASSWORD}` })
  @ApiResponse({ status: 404, description: `${NOTFOUND_USER}` })
  @ApiResponse({ status: 409, description: `${REFRESH_TOKEN_MODIFY_FAILED}` })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  @ApiBody({ type: LoginInputUser })
  private async login(@Body() user: LoginInputUser): Promise<LoginOutputUser> {
    return await this.usersService.login(user);
  }

  @UseGuards(AccessTokenGuard)
  @ApiBearerAuth("access_token")
  @Get("/:id")
  @ApiConsumes("application/x-www-form-urlencoded")
  @ApiOperation({
    summary: "USER FIND ONE API",
    description: "아이디 1개 검색",
  })
  @ApiResponse({ status: 200, description: `${TWO_HUNDRED_OK}` })
  @ApiResponse({ status: 400, description: `${NO_MATCH_USER_ID}` })
  @ApiResponse({ status: 404, description: `${NOTFOUND_USER}` })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  private async findOn(
    @Param("id", ParseIntPipe) id: number,
    @User() user: UsersBaseDto
  ): Promise<FindOutputUser> {
    return await this.usersService.findOn({ requestUser: { id }, user });
  }

  @UseGuards(AccessTokenGuard)
  @ApiBearerAuth("access_token")
  @Delete("/:id")
  @ApiConsumes("application/x-www-form-urlencoded")
  @ApiOperation({
    summary: "USER DELETE API",
    description: "아이디 1개 삭제",
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
  private async delete(
    @Param("id", ParseIntPipe) id: number,
    @User() user: UsersBaseDto
  ): Promise<DeleteOutputUser> {
    return await this.usersService.delete({ requestUserId: { id }, user });
  }

  @UseGuards(AccessTokenGuard)
  @ApiBearerAuth("access_token")
  @Patch("/update")
  @ApiConsumes("application/x-www-form-urlencoded")
  @ApiOperation({
    summary: "USER MODIFY API",
    description: "유저 정보 1개 수정",
  })
  @ApiResponse({ status: 200, description: `${TWO_HUNDRED_OK}` })
  @ApiResponse({ status: 400, description: `${NO_MATCH_USER_ID}` })
  @ApiResponse({
    status: 404,
    description: `${NOTFOUND_USER}, ${NOTFOUND_BOARD}`,
  })
  @ApiResponse({
    status: 409,
    description: `${UPDATE_FAILED}`,
  })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  private async update(
    @Body() requestUser: UpdateInputUser,
    @User() user: UsersBaseDto
  ): Promise<UpdateOutputUser> {
    return await this.usersService.update({ requestUser, user });
  }

  @UseGuards(AccessTokenGuard)
  @ApiBearerAuth("access_token")
  @Get("/access_token")
  @ApiResponse({ status: 200, description: `${TWO_HUNDRED_OK}` })
  @ApiResponse({ status: 401, description: `${UNAUTHORIZED}` })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  private async me(
    @User() userModel: UsersBaseDto
  ): Promise<BaseOutputDto<UsersBaseDto>> {
    return { response: userModel };
  }

  @UseGuards(RefreshTokenGuard)
  @ApiBearerAuth("refresh_token")
  @Get("/refresh_token")
  @ApiResponse({ status: 200, description: `${TWO_HUNDRED_OK}` })
  @ApiResponse({ status: 400, description: `${NOT_MATCH_REFRESH_TOKEN}` })
  @ApiResponse({ status: 401, description: `${UNAUTHORIZED}` })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  private async refreshMe(
    @User() userModel: UsersBaseDto
  ): Promise<BaseOutputDto<UsersBaseDto>> {
    return { response: userModel };
  }
}
