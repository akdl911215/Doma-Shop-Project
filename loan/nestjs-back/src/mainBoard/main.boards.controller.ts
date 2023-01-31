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
  Query,
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
import { MainBoardsInterface } from "./interceptors/main.boards.interface";
import { AccessTokenGuard } from "../common/infrastructures/token/guards/access.token.guard";
import { CREATE_SUCCESS } from "../common/constants/http/success/201";
import {
  BAD_REQUEST,
  NO_MATCH_USER_ID,
  NOT_EXIST_ID,
  NOT_EXIST_LIST,
} from "../common/constants/http/errors/400";
import { INTERNAL_SERVER_ERROR } from "../common/constants/http/errors/500";
import {
  MainBoardsRegisterInput,
  MainBoardsRegisterOutput,
} from "./dtos/main.boards.register.dto";
import { User } from "../common/decorators/user.decorator";
import { UsersBaseDto } from "../users/domain/entity/users.base.dto";
import { TWO_HUNDRED_OK } from "../common/constants/http/success/200";
import {
  MainBoardsListInput,
  MainBoardsListOutput,
} from "./dtos/main.boards.list.dto";
import { TWO_HUNDRED_FOUR_DELETE_SUCCESS } from "../common/constants/http/success/204";
import {
  NOTFOUND_BOARD,
  NOTFOUND_USER,
} from "../common/constants/http/errors/404";
import { MainBoardsDeleteOutput } from "./dtos/main.boards.delete.dto";
import {
  MainBoardsUpdateInput,
  MainBoardsUpdateOutput,
} from "./dtos/main.boards.update.dto";
import { MainBoardsReadOutput } from "./dtos/main.boards.read.dto";
import { UPDATE_FAILED } from "../common/constants/http/errors/409";

@ApiTags("/mainBoards")
@Controller("/mainBoards")
export class MainBoardsController {
  constructor(
    @Inject("MAIN_BOARDS_SERVICE")
    private readonly boardsService: MainBoardsInterface
  ) {}

  @UseGuards(AccessTokenGuard)
  @ApiBearerAuth("access_token")
  @Post("/register")
  @ApiConsumes("application/x-www-form-urlencoded")
  @ApiOperation({
    summary: "BOARD REGISTER API",
    description: "게시판 등록 절차",
  })
  @ApiResponse({ status: 201, description: `${CREATE_SUCCESS}` })
  @ApiResponse({ status: 400, description: `${BAD_REQUEST}` })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  @ApiBody({ type: MainBoardsRegisterInput })
  private async register(
    @Body() input: MainBoardsRegisterInput,
    @User() user: UsersBaseDto
  ): Promise<MainBoardsRegisterOutput> {
    return await this.boardsService.register({ requestUser: input, user });
  }

  @Get("/")
  @ApiOperation({
    summary: "BOARD LIST API",
    description: "게시판 리스트 조회",
  })
  @ApiConsumes("application/x-www-form-urlencoded")
  @ApiResponse({ status: 200, description: `${TWO_HUNDRED_OK}` })
  @ApiResponse({
    status: 400,
    description: `${NOT_EXIST_LIST}, ${BAD_REQUEST}`,
  })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  private async list(
    @Query() list: MainBoardsListInput
  ): Promise<MainBoardsListOutput> {
    return await this.boardsService.list(list);
  }

  @UseGuards(AccessTokenGuard)
  @ApiBearerAuth("access_token")
  @Delete("/:id")
  @ApiConsumes("application/x-www-form-urlencoded")
  @ApiOperation({
    summary: "BOARD DELETE API",
    description: "게시판 1개 삭제",
  })
  @ApiResponse({ status: 200, description: `${TWO_HUNDRED_OK}` })
  @ApiResponse({
    status: 204,
    description: `${TWO_HUNDRED_FOUR_DELETE_SUCCESS}`,
  })
  @ApiResponse({ status: 400, description: `${BAD_REQUEST}, ${NOT_EXIST_ID}` })
  @ApiResponse({
    status: 404,
    description: `${NOTFOUND_USER}, ${NOTFOUND_BOARD}`,
  })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  private async delete(
    @Param("id", ParseIntPipe) id: number,
    @User() user: UsersBaseDto
  ): Promise<MainBoardsDeleteOutput> {
    return await this.boardsService.delete({ requestBoardId: { id }, user });
  }

  @UseGuards(AccessTokenGuard)
  @ApiBearerAuth("access_token")
  @Get("/:id")
  @ApiConsumes("application/x-www-form-urlencoded")
  @ApiOperation({
    summary: "BOARD INQUIRY API",
    description: "게시판 1개 조회",
  })
  @ApiResponse({ status: 200, description: `${TWO_HUNDRED_OK}` })
  @ApiResponse({ status: 404, description: `${NOTFOUND_BOARD}` })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  private async read(
    @Param("id", ParseIntPipe) id: number
  ): Promise<MainBoardsReadOutput> {
    return await this.boardsService.read({ id });
  }

  @UseGuards(AccessTokenGuard)
  @ApiBearerAuth("access_token")
  @Patch("/update")
  @ApiConsumes("application/x-www-form-urlencoded")
  @ApiOperation({
    summary: "BOARD MODIFY API",
    description: "게시판 1개 수정",
  })
  @ApiResponse({ status: 200, description: `${TWO_HUNDRED_OK}` })
  @ApiResponse({ status: 400, description: `${NO_MATCH_USER_ID}` })
  @ApiResponse({
    status: 404,
    description: `${NOTFOUND_USER}, ${NOTFOUND_BOARD}`,
  })
  @ApiResponse({ status: 409, description: `${UPDATE_FAILED}` })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  private async update(
    @User() user: UsersBaseDto,
    @Body() requestBoard: MainBoardsUpdateInput
  ): Promise<MainBoardsUpdateOutput> {
    return await this.boardsService.update({ requestBoard, user });
  }
}
