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
exports.UsersExistsPhoneController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const _409_1 = require("../../../common/constants/http/errors/409");
const _500_1 = require("../../../common/constants/http/errors/500");
const _200_1 = require("../../../common/constants/http/success/200");
const users_exists_phone_adaptor_input_dto_1 = require("../../inbound/dtos/users.exists.phone.adaptor.input.dto");
let UsersExistsPhoneController = class UsersExistsPhoneController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async existsPhone(dto) {
        return await this.useCase.existsPhone(dto);
    }
};
__decorate([
    (0, common_1.Get)("/exists/phone/:phone"),
    (0, swagger_1.ApiOperation)({
        summary: "USER PHONE EXISTS API",
        description: "유저 핸드폰 존재 유무 조회 절차",
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: `${_200_1.TWO_HUNDRED_OK}` }),
    (0, swagger_1.ApiResponse)({ status: 409, description: `${_409_1.ALREADY_PHONE_EXISTS}` }),
    (0, swagger_1.ApiResponse)({ status: 500, description: `${_500_1.INTERNAL_SERVER_ERROR}` }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_exists_phone_adaptor_input_dto_1.UsersExistsPhoneAdaptorInputDto]),
    __metadata("design:returntype", Promise)
], UsersExistsPhoneController.prototype, "existsPhone", null);
UsersExistsPhoneController = __decorate([
    (0, swagger_1.ApiTags)("users"),
    (0, common_1.Controller)("users"),
    __param(0, (0, common_1.Inject)("USE_CASE_EXISTS_PHONE")),
    __metadata("design:paramtypes", [Object])
], UsersExistsPhoneController);
exports.UsersExistsPhoneController = UsersExistsPhoneController;
//# sourceMappingURL=users.exists.phone.controller.js.map