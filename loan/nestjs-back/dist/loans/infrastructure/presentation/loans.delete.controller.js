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
exports.LoansDeleteController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const _201_1 = require("../../../_common/constants/http/success/201");
const _500_1 = require("../../../_common/constants/http/errors/500");
const loans_delete_adaptor_input_dto_1 = require("../../inbound/dtos/loans.delete.adaptor.input.dto");
const user_decorator_1 = require("../../../_common/decorators/user.decorator");
const users_model_1 = require("../../../users/domain/entity/users.model");
const _401_1 = require("../../../_common/constants/http/errors/401");
const _404_1 = require("../../../_common/constants/http/errors/404");
const _400_1 = require("../../../_common/constants/http/errors/400");
let LoansDeleteController = class LoansDeleteController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async delete(dto, user) {
        return await this.useCase.delete(dto);
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)("access_token"),
    (0, common_1.Delete)("/"),
    (0, swagger_1.ApiConsumes)("application/x-www-form-urlencoded"),
    (0, swagger_1.ApiResponse)({ status: 201, description: `${_201_1.CREATE_SUCCESS}` }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: `${_400_1.NO_MATCH_LOAN_ID}, ${_400_1.NO_MATCH_USER_ID}`,
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: `${_401_1.UNAUTHORIZED}` }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: `${_404_1.NOTFOUND_LOAN}, ${_404_1.NOTFOUND_USER}`,
    }),
    (0, swagger_1.ApiResponse)({ status: 500, description: `${_500_1.INTERNAL_SERVER_ERROR}` }),
    (0, swagger_1.ApiBody)({ type: loans_delete_adaptor_input_dto_1.LoansDeleteAdaptorInputDto }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loans_delete_adaptor_input_dto_1.LoansDeleteAdaptorInputDto,
        users_model_1.UsersModel]),
    __metadata("design:returntype", Promise)
], LoansDeleteController.prototype, "delete", null);
LoansDeleteController = __decorate([
    (0, swagger_1.ApiTags)("loans"),
    (0, common_1.Controller)("loans"),
    __param(0, (0, common_1.Inject)("USE_CASE_DELETE")),
    __metadata("design:paramtypes", [Object])
], LoansDeleteController);
exports.LoansDeleteController = LoansDeleteController;
//# sourceMappingURL=loans.delete.controller.js.map