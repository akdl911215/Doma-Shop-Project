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
exports.UsersUpdateController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const access_token_guard_1 = require("../../../common/infrastructures/token/guards/access.token.guard");
const _200_1 = require("../../../common/constants/http/success/200");
const _400_1 = require("../../../common/constants/http/errors/400");
const _404_1 = require("../../../common/constants/http/errors/404");
const _409_1 = require("../../../common/constants/http/errors/409");
const _500_1 = require("../../../common/constants/http/errors/500");
const users_update_adaptor_input_dto_1 = require("../../inbound/dtos/users.update.adaptor.input.dto");
let UsersUpdateController = class UsersUpdateController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async update(dto) {
        return await this.useCase.update(dto);
    }
};
__decorate([
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiBearerAuth)("access_token"),
    (0, common_1.Patch)("/update"),
    (0, swagger_1.ApiConsumes)("application/x-www-form-urlencoded"),
    (0, swagger_1.ApiOperation)({
        summary: "USER UPDATE API",
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
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_update_adaptor_input_dto_1.UsersUpdateAdaptorInputDto]),
    __metadata("design:returntype", Promise)
], UsersUpdateController.prototype, "update", null);
UsersUpdateController = __decorate([
    (0, common_1.Controller)('users'),
    (0, swagger_1.ApiTags)('users'),
    __param(0, (0, common_1.Inject)('USERS_UPDATE')),
    __metadata("design:paramtypes", [Object])
], UsersUpdateController);
exports.UsersUpdateController = UsersUpdateController;
//# sourceMappingURL=users.update.controller.js.map