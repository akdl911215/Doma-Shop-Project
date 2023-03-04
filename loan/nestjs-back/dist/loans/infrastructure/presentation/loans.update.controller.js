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
exports.LoansUpdateController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const _200_1 = require("../../../_common/constants/http/success/200");
const _500_1 = require("../../../_common/constants/http/errors/500");
const loans_update_adaptor_input_dto_1 = require("../../inbound/dtos/adaptor/loans.update.adaptor.input.dto");
const _404_1 = require("../../../_common/constants/http/errors/404");
let LoansUpdateController = class LoansUpdateController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async update(dto) {
        return await this.useCase.update(dto);
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)("access_token"),
    (0, common_1.Patch)("/"),
    (0, swagger_1.ApiConsumes)("application/json"),
    (0, swagger_1.ApiOperation)({
        summary: "LOAN MODIFY API",
        description: "대출 수정 절차",
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: `${_200_1.TWO_HUNDRED_OK}` }),
    (0, swagger_1.ApiResponse)({ status: 404, description: `${_404_1.NOTFOUND_LOAN}` }),
    (0, swagger_1.ApiResponse)({ status: 500, description: `${_500_1.INTERNAL_SERVER_ERROR}` }),
    (0, swagger_1.ApiBody)({ type: loans_update_adaptor_input_dto_1.LoansUpdateAdaptorInputDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loans_update_adaptor_input_dto_1.LoansUpdateAdaptorInputDto]),
    __metadata("design:returntype", Promise)
], LoansUpdateController.prototype, "update", null);
LoansUpdateController = __decorate([
    (0, swagger_1.ApiTags)("loans"),
    (0, common_1.Controller)("loans"),
    __param(0, (0, common_1.Inject)("USE_CASE_UPDATE")),
    __metadata("design:paramtypes", [Object])
], LoansUpdateController);
exports.LoansUpdateController = LoansUpdateController;
//# sourceMappingURL=loans.update.controller.js.map