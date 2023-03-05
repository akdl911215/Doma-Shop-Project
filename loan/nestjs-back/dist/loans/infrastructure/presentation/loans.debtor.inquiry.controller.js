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
exports.LoansDebtorInquiryController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const _200_1 = require("../../../_common/constants/http/success/200");
const _400_1 = require("../../../_common/constants/http/errors/400");
const _500_1 = require("../../../_common/constants/http/errors/500");
const _404_1 = require("../../../_common/constants/http/errors/404");
const loans_debtor_inquiry_adaptor_input_dto_1 = require("../../inbound/dtos/adaptor/loans.debtor.inquiry.adaptor.input.dto");
let LoansDebtorInquiryController = class LoansDebtorInquiryController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async debtorInquiry(dto) {
        return await this.useCase.debtorInquiry(dto);
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)("access_token"),
    (0, common_1.Get)("/debtor"),
    (0, swagger_1.ApiConsumes)("application/x-www-form-urlencoded"),
    (0, swagger_1.ApiOperation)({
        summary: "LOAN DEBTOR INQUIRY API",
        description: "대출 채무자 기준 조회 절차",
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: `${_200_1.TWO_HUNDRED_OK}` }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: `${_400_1.DEBTOR_UNIQUE_ID_REQUIRED}, ${_400_1.UNIQUE_ID_REQUIRED}`,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: `${_404_1.NOTFOUND_LOAN}` }),
    (0, swagger_1.ApiResponse)({ status: 500, description: `${_500_1.INTERNAL_SERVER_ERROR}` }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loans_debtor_inquiry_adaptor_input_dto_1.LoansDebtorInquiryAdaptorInputDto]),
    __metadata("design:returntype", Promise)
], LoansDebtorInquiryController.prototype, "debtorInquiry", null);
LoansDebtorInquiryController = __decorate([
    (0, swagger_1.ApiTags)("loans"),
    (0, common_1.Controller)("loans"),
    __param(0, (0, common_1.Inject)("USE_CASE_DEBTOR_INQUIRY")),
    __metadata("design:paramtypes", [Object])
], LoansDebtorInquiryController);
exports.LoansDebtorInquiryController = LoansDebtorInquiryController;
//# sourceMappingURL=loans.debtor.inquiry.controller.js.map