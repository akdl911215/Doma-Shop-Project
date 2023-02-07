"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainBoardsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const access_token_guard_1 = require("../common/infrastructures/token/guards/access.token.guard");
const _201_1 = require("../common/constants/http/success/201");
const _400_1 = require("../common/constants/http/errors/400");
const _500_1 = require("../common/constants/http/errors/500");
const main_boards_register_dto_1 = require("./dtos/main.boards.register.dto");
const user_decorator_1 = require("../common/decorators/user.decorator");
const users_model_1 = require("../users/domain/entity/users.model");
const _200_1 = require("../common/constants/http/success/200");
const main_boards_list_dto_1 = require("./dtos/main.boards.list.dto");
const _204_1 = require("../common/constants/http/success/204");
const _404_1 = require("../common/constants/http/errors/404");
const main_boards_update_dto_1 = require("./dtos/main.boards.update.dto");
const _409_1 = require("../common/constants/http/errors/409");
let MainBoardsController = class MainBoardsController {
    constructor(boardsService) {
        this.boardsService = boardsService;
    }
    async register(input, user) {
        return await this.boardsService.register({ requestUser: input, user });
    }
    async list(list) {
        return await this.boardsService.list(list);
    }
    async delete(id, user) {
        return await this.boardsService.delete({ requestBoardId: { id }, user });
    }
    async read(id) {
        return await this.boardsService.read({ id });
    }
    async update(user, requestBoard) {
        return await this.boardsService.update({ requestBoard, user });
    }
};
__decorate([
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiBearerAuth)("access_token"),
    (0, common_1.Post)("/register"),
    (0, swagger_1.ApiConsumes)("application/x-www-form-urlencoded"),
    (0, swagger_1.ApiOperation)({
        summary: "BOARD REGISTER API",
        description: "게시판 등록 절차",
    }),
    (0, swagger_1.ApiResponse)({ status: 201, description: `${_201_1.CREATE_SUCCESS}` }),
    (0, swagger_1.ApiResponse)({ status: 400, description: `${_400_1.BAD_REQUEST}` }),
    (0, swagger_1.ApiResponse)({ status: 500, description: `${_500_1.INTERNAL_SERVER_ERROR}` }),
    (0, swagger_1.ApiBody)({ type: main_boards_register_dto_1.MainBoardsRegisterInput }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [main_boards_register_dto_1.MainBoardsRegisterInput,
        users_model_1.UsersModel]),
    __metadata("design:returntype", Promise)
], MainBoardsController.prototype, "register", null);
__decorate([
    (0, common_1.Get)("/"),
    (0, swagger_1.ApiOperation)({
        summary: "BOARD LIST API",
        description: "게시판 리스트 조회",
    }),
    (0, swagger_1.ApiConsumes)("application/x-www-form-urlencoded"),
    (0, swagger_1.ApiResponse)({ status: 200, description: `${_200_1.TWO_HUNDRED_OK}` }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: `${_400_1.NOT_EXIST_LIST}, ${_400_1.BAD_REQUEST}`,
    }),
    (0, swagger_1.ApiResponse)({ status: 500, description: `${_500_1.INTERNAL_SERVER_ERROR}` }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [main_boards_list_dto_1.MainBoardsListInput]),
    __metadata("design:returntype", Promise)
], MainBoardsController.prototype, "list", null);
__decorate([
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiBearerAuth)("access_token"),
    (0, common_1.Delete)("/:id"),
    (0, swagger_1.ApiConsumes)("application/x-www-form-urlencoded"),
    (0, swagger_1.ApiOperation)({
        summary: "BOARD DELETE API",
        description: "게시판 1개 삭제",
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: `${_200_1.TWO_HUNDRED_OK}` }),
    (0, swagger_1.ApiResponse)({
        status: 204,
        description: `${_204_1.TWO_HUNDRED_FOUR_DELETE_SUCCESS}`,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: `${_400_1.BAD_REQUEST}, ${_400_1.NOT_EXIST_ID}` }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: `${_404_1.NOTFOUND_USER}, ${_404_1.NOTFOUND_BOARD}`,
    }),
    (0, swagger_1.ApiResponse)({ status: 500, description: `${_500_1.INTERNAL_SERVER_ERROR}` }),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, users_model_1.UsersModel]),
    __metadata("design:returntype", Promise)
], MainBoardsController.prototype, "delete", null);
__decorate([
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiBearerAuth)("access_token"),
    (0, common_1.Get)("/:id"),
    (0, swagger_1.ApiConsumes)("application/x-www-form-urlencoded"),
    (0, swagger_1.ApiOperation)({
        summary: "BOARD INQUIRY API",
        description: "게시판 1개 조회",
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: `${_200_1.TWO_HUNDRED_OK}` }),
    (0, swagger_1.ApiResponse)({ status: 404, description: `${_404_1.NOTFOUND_BOARD}` }),
    (0, swagger_1.ApiResponse)({ status: 500, description: `${_500_1.INTERNAL_SERVER_ERROR}` }),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MainBoardsController.prototype, "read", null);
__decorate([
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiBearerAuth)("access_token"),
    (0, common_1.Patch)("/update"),
    (0, swagger_1.ApiConsumes)("application/x-www-form-urlencoded"),
    (0, swagger_1.ApiOperation)({
        summary: "BOARD MODIFY API",
        description: "게시판 1개 수정",
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: `${_200_1.TWO_HUNDRED_OK}` }),
    (0, swagger_1.ApiResponse)({ status: 400, description: `${_400_1.NO_MATCH_USER_ID}` }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: `${_404_1.NOTFOUND_USER}, ${_404_1.NOTFOUND_BOARD}`,
    }),
    (0, swagger_1.ApiResponse)({ status: 409, description: `${_409_1.UPDATE_FAILED}` }),
    (0, swagger_1.ApiResponse)({ status: 500, description: `${_500_1.INTERNAL_SERVER_ERROR}` }),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_model_1.UsersModel,
        main_boards_update_dto_1.MainBoardsUpdateInput]),
    __metadata("design:returntype", Promise)
], MainBoardsController.prototype, "update", null);
MainBoardsController = __decorate([
    (0, swagger_1.ApiTags)("/mainBoards"),
    (0, common_1.Controller)("/mainBoards"),
    __param(0, (0, common_1.Inject)("MAIN_BOARDS_SERVICE")),
    __metadata("design:paramtypes", [Object])
], MainBoardsController);
exports.MainBoardsController = MainBoardsController;
//# sourceMappingURL=main.boards.controller.js.map