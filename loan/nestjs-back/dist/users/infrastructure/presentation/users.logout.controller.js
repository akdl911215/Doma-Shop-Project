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
exports.UsersLogoutController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const _404_1 = require("../../../common/constants/http/errors/404");
const _500_1 = require("../../../common/constants/http/errors/500");
const users_model_1 = require("../../domain/entity/users.model");
const _200_1 = require("../../../common/constants/http/success/200");
const user_decorator_1 = require("../../../common/decorators/user.decorator");
const jwt_refresh_guard_1 = require("../token/guard/jwt.refresh.guard");
let UsersLogoutController = class UsersLogoutController {
    constructor(service) {
        this.service = service;
    }
    async logout(user) {
        const { id } = user;
        return await this.service.logout({ id });
    }
};
__decorate([
    (0, common_1.Patch)("/logout"),
    (0, common_1.UseGuards)(jwt_refresh_guard_1.RefreshTokenGuard),
    (0, swagger_1.ApiBearerAuth)("refresh_token"),
    (0, swagger_1.ApiOperation)({ summary: "USER LOGOUT API", description: "로그아웃 절차" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: `${_200_1.TWO_HUNDRED_OK}` }),
    (0, swagger_1.ApiResponse)({ status: 404, description: `${_404_1.NOTFOUND_USER}` }),
    (0, swagger_1.ApiResponse)({ status: 500, description: `${_500_1.INTERNAL_SERVER_ERROR}` }),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_model_1.UsersModel]),
    __metadata("design:returntype", Promise)
], UsersLogoutController.prototype, "logout", null);
UsersLogoutController = __decorate([
    (0, swagger_1.ApiTags)("users"),
    (0, common_1.Controller)("users"),
    __param(0, (0, common_1.Inject)("SERVICE_LOGOUT")),
    __metadata("design:paramtypes", [Object])
], UsersLogoutController);
exports.UsersLogoutController = UsersLogoutController;
//# sourceMappingURL=users.logout.controller.js.map