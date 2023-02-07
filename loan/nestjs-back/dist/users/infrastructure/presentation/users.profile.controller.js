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
exports.UsersProfileController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const access_token_guard_1 = require("../../../common/infrastructures/token/guards/access.token.guard");
const _200_1 = require("../../../common/constants/http/success/200");
const _400_1 = require("../../../common/constants/http/errors/400");
const _404_1 = require("../../../common/constants/http/errors/404");
const _500_1 = require("../../../common/constants/http/errors/500");
let UsersProfileController = class UsersProfileController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async profile(id) {
        return await this.useCase.profile({ id });
    }
};
__decorate([
    (0, common_1.UseGuards)(access_token_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiBearerAuth)("access_token"),
    (0, common_1.Get)("/:id"),
    (0, swagger_1.ApiConsumes)("application/x-www-form-urlencoded"),
    (0, swagger_1.ApiOperation)({
        summary: "USER PROFILE API",
        description: "유저 정보 1개 검색",
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: `${_200_1.TWO_HUNDRED_OK}` }),
    (0, swagger_1.ApiResponse)({ status: 400, description: `${_400_1.NO_MATCH_USER_ID}` }),
    (0, swagger_1.ApiResponse)({ status: 404, description: `${_404_1.NOTFOUND_USER}` }),
    (0, swagger_1.ApiResponse)({ status: 500, description: `${_500_1.INTERNAL_SERVER_ERROR}` }),
    __param(0, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersProfileController.prototype, "profile", null);
UsersProfileController = __decorate([
    (0, common_1.Controller)('users'),
    (0, swagger_1.ApiTags)('users'),
    __param(0, (0, common_1.Inject)('USERS_PROFILE')),
    __metadata("design:paramtypes", [Object])
], UsersProfileController);
exports.UsersProfileController = UsersProfileController;
//# sourceMappingURL=users.profile.controller.js.map