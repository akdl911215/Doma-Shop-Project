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
exports.UsersLoginController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const _201_1 = require("../../../_common/constants/http/success/201");
const _400_1 = require("../../../_common/constants/http/errors/400");
const _404_1 = require("../../../_common/constants/http/errors/404");
const _500_1 = require("../../../_common/constants/http/errors/500");
const users_login_adaptor_input_dto_1 = require("../../inbound/dtos/users.login.adaptor.input.dto");
const password_checking_interceptor_1 = require("../../interceptor/password.checking.interceptor");
let UsersLoginController = class UsersLoginController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async login(dto) {
        return await this.useCase.login(dto);
    }
};
__decorate([
    (0, common_1.Post)("/login"),
    (0, swagger_1.ApiConsumes)("application/x-www-form-urlencoded"),
    (0, swagger_1.ApiOperation)({ summary: "USER LOGIN API", description: "로그인 진행 절차" }),
    (0, swagger_1.ApiResponse)({ status: 201, description: `${_201_1.LOGIN_SUCCESS}` }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: `${_400_1.NO_MATCH_USER_ID}, ${_400_1.NO_MATCH_PASSWORD}`,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: `${_404_1.NOTFOUND_USER}` }),
    (0, swagger_1.ApiResponse)({ status: 500, description: `${_500_1.INTERNAL_SERVER_ERROR}` }),
    (0, swagger_1.ApiBody)({ type: users_login_adaptor_input_dto_1.UsersLoginAdaptorInputDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_login_adaptor_input_dto_1.UsersLoginAdaptorInputDto]),
    __metadata("design:returntype", Promise)
], UsersLoginController.prototype, "login", null);
UsersLoginController = __decorate([
    (0, common_1.Controller)("users"),
    (0, swagger_1.ApiTags)("users"),
    (0, common_1.UseInterceptors)(password_checking_interceptor_1.PasswordCheckingInterceptor),
    __param(0, (0, common_1.Inject)("USE_CASE_LOGIN")),
    __metadata("design:paramtypes", [Object])
], UsersLoginController);
exports.UsersLoginController = UsersLoginController;
//# sourceMappingURL=users.login.controller.js.map