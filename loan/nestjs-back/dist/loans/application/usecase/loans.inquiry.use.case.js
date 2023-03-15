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
    constructor(repository, compareExistsDbUniqueIdWith, compareExistsDbCreditorUniqueIdWith, compareExistsDbDebtorUniqueIdWith) {
        this.repository = repository;
        this.compareExistsDbUniqueIdWith = compareExistsDbUniqueIdWith;
        this.compareExistsDbCreditorUniqueIdWith = compareExistsDbCreditorUniqueIdWith;
        this.compareExistsDbDebtorUniqueIdWith = compareExistsDbDebtorUniqueIdWith;
    }
    async inquiry(dto) {
        const { id, creditorsId, debtorsId } = dto;
        const { response: { existsLoanUniqueId }, } = await this.compareExistsDbUniqueIdWith.existsLoanUniqueId({ id });
        if (existsLoanUniqueId)
            throw new common_1.BadRequestException(_400_1.UNIQUE_ID_REQUIRED);
        const { response: { existsLoanDebtorUniqueId }, } = await this.compareExistsDbDebtorUniqueIdWith.existsLoanDebtorUniqueId({
            debtorsId,
        });
        if (existsLoanDebtorUniqueId)
            throw new common_1.BadRequestException(_400_1.DEBTOR_UNIQUE_ID_REQUIRED);
        const { response: { existsLoanCreditorUniqueId }, } = await this.compareExistsDbCreditorUniqueIdWith.existsLoanCreditorUniqueId({
            creditorsId,
        });
        if (existsLoanCreditorUniqueId)
            throw new common_1.BadRequestException(_400_1.CREDITOR_UNIQUE_ID_REQUIRED);
        return await this.repository.inquiry(dto);
    }
};
LoansInquiryUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("INQUIRY")),
    __param(1, (0, common_1.Inject)("EXISTS_LOAN_UNIQUE_ID")),
    __param(2, (0, common_1.Inject)("EXISTS_LOAN_CREDITOR_UNIQUE_ID")),
    __param(3, (0, common_1.Inject)("EXISTS_LOAN_DEBTOR_UNIQUE_ID")),
    __metadata("design:paramtypes", [Object, Object, Object, Object])
], LoansInquiryUseCase);
exports.LoansInquiryUseCase = LoansInquiryUseCase;
//# sourceMappingURL=loans.inquiry.use.case.js.map