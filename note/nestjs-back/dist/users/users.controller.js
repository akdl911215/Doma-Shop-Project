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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const _201_1 = require("../common/constants/http/success/201");
const _409_1 = require("../common/constants/http/errors/409");
const _500_1 = require("../common/constants/http/errors/500");
const users_register_dto_1 = require("./dtos/users.register.dto");
const _400_1 = require("../common/constants/http/errors/400");
const _404_1 = require("../common/constants/http/errors/404");
const users_login_dto_1 = require("./dtos/users.login.dto");
const _200_1 = require("../common/constants/http/success/200");
const access_token_guard_1 = require("../common/infrastructures/token/guards/access.token.guard");
const _204_1 = require("../common/constants/http/success/204");
const users_base_dto_1 = require("./dtos/users.base.dto");
const user_decorator_1 = require("../common/decorators/user.decorator");
const _401_1 = require("../common/constants/http/errors/401");
const refresh_token_guard_1 = require("../common/infrastructures/token/guards/refresh.token.guard");
const users_update_dto_1 = require("./dtos/users.update.dto");
let NOTFOUND_BOARD_COMMENT;
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async register(user) {
        return await this.usersService.register(user);
    }
    async login(user) {
        return await this.usersService.login(user);
    }
    async findOn(id, user) {
        return await this.usersService.findOn({ requestUser: { id }, user });
    }
    async delete(id, user) {
        return await this.usersService.delete({ requestUserId: { id }, user });
    }
    async update(requestUser, user) {
        return await this.usersService.update({ requestUser, user });
    }
    async me(userModel) {
        return { response: userModel };
    }
    async refreshMe(userModel) {
        return { response: userModel };
    }
};
__decorate([
    (0, common_1.Post)("/register"),
    (0, swagger_1.ApiConsumes)("application/x-www-form-urlencoded"),
    (0, swagger_1.ApiOperation)({ summary: "USER REGISTER API", description: "회원 가입 절차" }),
    (0, swagger_1.ApiResponse)({ status: 201, description: `${_201_1.CREATE_SUCCESS}` }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: `${_409_1.ALREADY_ACCOUNT_ID_EXISTS}, ${_409_1.ALREADY_PHONE_EXISTS}`,
    }),
    (0, swagger_1.ApiResponse)({ status: 500, description: `${_500_1.INTERNAL_SERVER_ERROR}` }),
    (0, swagger_1.ApiBody)({ type: users_register_dto_1.RegisterInputUser }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_register_dto_1.RegisterInputUser]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "register", null);
__decorate([
    (0, common_1.Post)("/login"),
    (0, swagger_1.ApiConsumes)("application/x-www-form-urlencoded"),
    (0, swagger_1.ApiOperation)({ summary: "USER LOGIN API", description: "로그인 진행 절차" }),
    (0, swagger_1.ApiResponse)({ status: 201, description: `${_201_1.LOGIN_SUCCESS}` }),
    (0, swagger_1.ApiResponse)({ status: 400, description: `${_400_1.NO_MATCH_PASSWORD}` }),
    (0, swagger_1.ApiResponse)({ status: 404, description: `${_404_1.NOTFOUND_USER}` }),
    (0, swagger_1.ApiResponse)({ status: 409, description: `${_409_1.REFRESH_TOKEN_MODIFY_FAILED}` }),
    (0, swagger_1.ApiResponse)({ status: 500, description: `${_500_1.INTERNAL_SERVER_ERROR}` }),
    (0, swagger_1.ApiBody)({ type: users_login_dto_1.LoginInputUser }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_login_dto_1.LoginInputUser]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiBearerAuth)("access_token"),
    (0, common_1.Get)("/:id"),
    (0, swagger_1.ApiConsumes)("application/x-www-form-urlencoded"),
    (0, swagger_1.ApiOperation)({
        summary: "USER FIND ONE API",
        description: "아이디 1개 검색",
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: `${_200_1.TWO_HUNDRED_OK}` }),
    (0, swagger_1.ApiResponse)({ status: 404, description: `${_404_1.NOTFOUND_USER}` }),
    (0, swagger_1.ApiResponse)({ status: 500, description: `${_500_1.INTERNAL_SERVER_ERROR}` }),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, users_base_dto_1.UsersBaseDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findOn", null);
__decorate([
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiBearerAuth)("access_token"),
    (0, common_1.Delete)("/:id"),
    (0, swagger_1.ApiConsumes)("application/x-www-form-urlencoded"),
    (0, swagger_1.ApiOperation)({
        summary: "USER DELETE API",
        description: "아이디 1개 삭제",
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: `${_200_1.TWO_HUNDRED_OK}` }),
    (0, swagger_1.ApiResponse)({
        status: 204,
        description: `${_204_1.TWO_HUNDRED_FOUR_DELETE_SUCCESS}`,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: `${_400_1.NO_MATCH_USER_ID}` }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: `${_404_1.NOTFOUND_USER}, ${_404_1.NOTFOUND_BOARD}, ${NOTFOUND_BOARD_COMMENT}`,
    }),
    (0, swagger_1.ApiResponse)({ status: 500, description: `${_500_1.INTERNAL_SERVER_ERROR}` }),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, users_base_dto_1.UsersBaseDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "delete", null);
__decorate([
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiBearerAuth)("access_token"),
    (0, common_1.Patch)("/update"),
    (0, swagger_1.ApiConsumes)("application/x-www-form-urlencoded"),
    (0, swagger_1.ApiOperation)({
        summary: "USER MODIFY API",
        description: "유저 정보 1개 수정",
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: `${_200_1.TWO_HUNDRED_OK}` }),
    (0, swagger_1.ApiResponse)({ status: 400, description: `${_400_1.NO_MATCH_USER_ID}` }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: `${_404_1.NOTFOUND_USER}, ${_404_1.NOTFOUND_BOARD}`,
    }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: `${_409_1.UPDATE_FAILED}`,
    }),
    (0, swagger_1.ApiResponse)({ status: 500, description: `${_500_1.INTERNAL_SERVER_ERROR}` }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_update_dto_1.UpdateInputUser,
        users_base_dto_1.UsersBaseDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiBearerAuth)("access_token"),
    (0, common_1.Get)("/access_token"),
    (0, swagger_1.ApiResponse)({ status: 200, description: `${_200_1.TWO_HUNDRED_OK}` }),
    (0, swagger_1.ApiResponse)({ status: 401, description: `${_401_1.UNAUTHORIZED}` }),
    (0, swagger_1.ApiResponse)({ status: 500, description: `${_500_1.INTERNAL_SERVER_ERROR}` }),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_base_dto_1.UsersBaseDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "me", null);
__decorate([
    (0, common_1.UseGuards)(refresh_token_guard_1.RefreshTokenGuard),
    (0, swagger_1.ApiBearerAuth)("refresh_token"),
    (0, common_1.Get)("/refresh_token"),
    (0, swagger_1.ApiResponse)({ status: 200, description: `${_200_1.TWO_HUNDRED_OK}` }),
    (0, swagger_1.ApiResponse)({ status: 400, description: `${_400_1.NOT_MATCH_REFRESH_TOKEN}` }),
    (0, swagger_1.ApiResponse)({ status: 401, description: `${_401_1.UNAUTHORIZED}` }),
    (0, swagger_1.ApiResponse)({ status: 500, description: `${_500_1.INTERNAL_SERVER_ERROR}` }),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_base_dto_1.UsersBaseDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "refreshMe", null);
UsersController = __decorate([
    (0, swagger_1.ApiTags)("users"),
    (0, common_1.Controller)("users"),
    __param(0, (0, common_1.Inject)("USERS_SERVICE")),
    __metadata("design:paramtypes", [Object])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map