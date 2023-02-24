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
exports.LoansInquiryUseCase = void 0;
const common_1 = require("@nestjs/common");
const _400_1 = require("../../../_common/constants/http/errors/400");
let LoansInquiryUseCase = class LoansInquiryUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async inquiry(dto) {
        const { id, creditorId, debtorId } = dto;
        if (!id)
            throw new common_1.BadRequestException(_400_1.NO_MATCH_LOAN_ID);
        if (!creditorId)
            throw new common_1.BadRequestException(_400_1.NO_MATCH_USER_ID);
        return await this.repository.inquiry(dto);
    }
};
LoansInquiryUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("INQUIRY")),
    __metadata("design:paramtypes", [Object])
], LoansInquiryUseCase);
exports.LoansInquiryUseCase = LoansInquiryUseCase;
//# sourceMappingURL=loans.inquiry.use.case.js.map