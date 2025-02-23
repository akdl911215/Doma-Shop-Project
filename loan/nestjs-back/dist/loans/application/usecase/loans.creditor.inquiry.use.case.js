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
exports.LoansCreditorInquiryUseCase = void 0;
const common_1 = require("@nestjs/common");
const _400_1 = require("../../../_common/constants/http/errors/400");
let LoansCreditorInquiryUseCase = class LoansCreditorInquiryUseCase {
    constructor(repository, compareExistsDbUniqueIdWith, compareExistsDBUsersUniqueIdWith) {
        this.repository = repository;
        this.compareExistsDbUniqueIdWith = compareExistsDbUniqueIdWith;
        this.compareExistsDBUsersUniqueIdWith = compareExistsDBUsersUniqueIdWith;
    }
    async creditorInquiry(dto) {
        const { id, creditorUniqueId } = dto;
        const { response: { existsLoanUniqueId }, } = await this.compareExistsDbUniqueIdWith.existsLoanUniqueId({ id });
        if (existsLoanUniqueId)
            throw new common_1.BadRequestException(_400_1.UNIQUE_ID_REQUIRED);
        const { response: { userExistsFoundByUniqueId: existsLoanCreditorUniqueId }, } = await this.compareExistsDBUsersUniqueIdWith.usersExistsFoundByUniqueId({
            id: creditorUniqueId,
        });
        if (existsLoanCreditorUniqueId)
            throw new common_1.BadRequestException(_400_1.CREDITOR_UNIQUE_ID_REQUIRED);
        return this.repository.creditorInquiry(dto);
    }
};
LoansCreditorInquiryUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("CREDITOR_INQUIRY")),
    __param(1, (0, common_1.Inject)("EXISTS_LOAN_UNIQUE_ID")),
    __param(2, (0, common_1.Inject)("USERS_EXISTS_FOUND_BY_ID")),
    __metadata("design:paramtypes", [Object, Object, Object])
], LoansCreditorInquiryUseCase);
exports.LoansCreditorInquiryUseCase = LoansCreditorInquiryUseCase;
//# sourceMappingURL=loans.creditor.inquiry.use.case.js.map