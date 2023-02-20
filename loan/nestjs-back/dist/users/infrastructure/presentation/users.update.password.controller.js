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
exports.UsersUpdatePasswordController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const _200_1 = require("../../../common/constants/http/success/200");
const _404_1 = require("../../../common/constants/http/errors/404");
const _409_1 = require("../../../common/constants/http/errors/409");
const _500_1 = require("../../../common/constants/http/errors/500");
const users_model_1 = require("../../domain/entity/users.model");
const user_decorator_1 = require("../../../common/decorators/user.decorator");
const jwt_access_guard_1 = require("../token/guard/jwt.access.guard");
const users_update_password_adaptor_input_dto_1 = require("../../inbound/dtos/users.update.password.adaptor.input.dto");
let UsersUpdatePasswordController = class UsersUpdatePasswordController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async updatePassword(request, user) {
        const { password } = request;
        const { id } = user;
        return await this.useCase.updatePassword({ password, id });
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_access_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiBearerAuth)("access_token"),
    (0, common_1.Patch)("/update/password"),
    (0, swagger_1.ApiConsumes)("application/x-www-form-urlencoded"),
    (0, swagger_1.ApiOperation)({
        summary: "USER PASSWORD MODIFY API",
        description: "유저 비밀번호 정보 1개 수정",
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: `${_200_1.TWO_HUNDRED_OK}` }),
    (0, swagger_1.ApiResponse)({ status: 404, description: `${_404_1.NOTFOUND_USER}` }),
    (0, swagger_1.ApiResponse)({ status: 409, description: `${_409_1.UPDATE_FAILED}` }),
    (0, swagger_1.ApiResponse)({ status: 500, description: `${_500_1.INTERNAL_SERVER_ERROR}` }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_update_password_adaptor_input_dto_1.UsersUpdatePasswordAdaptorInputDto,
        users_model_1.UsersModel]),
    __metadata("design:returntype", Promise)
], UsersUpdatePasswordController.prototype, "updatePassword", null);
UsersUpdatePasswordController = __decorate([
    (0, swagger_1.ApiTags)("users"),
    (0, common_1.Controller)("users"),
    __param(0, (0, common_1.Inject)("USE_CASE_UPDATE_PASSWORD")),
    __metadata("design:paramtypes", [Object])
], UsersUpdatePasswordController);
exports.UsersUpdatePasswordController = UsersUpdatePasswordController;
//# sourceMappingURL=users.update.password.controller.js.map