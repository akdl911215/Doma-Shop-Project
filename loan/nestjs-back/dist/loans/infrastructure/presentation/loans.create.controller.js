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
exports.LoansCreateController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const _201_1 = require("../../../_common/constants/http/success/201");
const _500_1 = require("../../../_common/constants/http/errors/500");
const loans_create_adaptor_input_dto_1 = require("../../inbound/dtos/adaptor/loans.create.adaptor.input.dto");
const _400_1 = require("../../../_common/constants/http/errors/400");
let LoansCreateController = class LoansCreateController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async create(dto) {
        return await this.useCase.create(dto);
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)("access_token"),
    (0, common_1.Post)("/create"),
    (0, swagger_1.ApiConsumes)("application/x-www-form-urlencoded"),
    (0, swagger_1.ApiOperation)({ summary: "USER REGISTER API", description: "회원 가입 절차" }),
    (0, swagger_1.ApiResponse)({ status: 201, description: `${_201_1.CREATE_SUCCESS}` }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: `${_400_1.CREDITOR_ID_REQUIRED}, ${_400_1.CREDITOR_UNIQUE_ID_REQUIRED}, ${_400_1.DEBTOR_ID_REQUIRED}, ${_400_1.DEBTOR_UNIQUE_ID_REQUIRED}, ${_400_1.LOAN_REQUIRED}, ${_400_1.LOAN_REPAYMENT_DATE_REQUIRED}, ${_400_1.LOAN_INTEREST_REQUIRED}`,
    }),
    (0, swagger_1.ApiResponse)({ status: 500, description: `${_500_1.INTERNAL_SERVER_ERROR}` }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loans_create_adaptor_input_dto_1.LoansCreateAdaptorInputDto]),
    __metadata("design:returntype", Promise)
], LoansCreateController.prototype, "create", null);
LoansCreateController = __decorate([
    (0, swagger_1.ApiTags)("loans"),
    (0, common_1.Controller)("loans"),
    __param(0, (0, common_1.Inject)("USE_CASE_CREATE")),
    __metadata("design:paramtypes", [Object])
], LoansCreateController);
exports.LoansCreateController = LoansCreateController;
//# sourceMappingURL=loans.create.controller.js.map