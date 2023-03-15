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
exports.LoansCreateUseCase = void 0;
const common_1 = require("@nestjs/common");
const _400_1 = require("../../../_common/constants/http/errors/400");
const _404_1 = require("../../../_common/constants/http/errors/404");
let LoansCreateUseCase = class LoansCreateUseCase {
    constructor(repository, compareExistsDBUserWith) {
        this.repository = repository;
        this.compareExistsDBUserWith = compareExistsDBUserWith;
    }
    async create(dto) {
        const { creditorId, creditorUniqueId, debtorId, debtorUniqueId, totalAmountLoan, loanRepaymentDate, interest, } = dto;
        for (let i = 0; i < creditorUniqueId.length; ++i) {
            if (!creditorId[i])
                throw new common_1.BadRequestException(_400_1.CREDITOR_ID_REQUIRED);
            if (!creditorUniqueId[i])
                throw new common_1.BadRequestException(_400_1.CREDITOR_UNIQUE_ID_REQUIRED);
            const { response: { existsUser: existsCreditor }, } = await this.compareExistsDBUserWith.existsUser({
                id: creditorUniqueId[i],
                userId: creditorId[i],
            });
            if (!existsCreditor)
                throw new common_1.NotFoundException(_404_1.NOTFOUND_LOAN_CREDITOR);
        }
        if (!debtorId)
            throw new common_1.BadRequestException(_400_1.DEBTOR_ID_REQUIRED);
        if (!debtorUniqueId)
            throw new common_1.BadRequestException(_400_1.DEBTOR_UNIQUE_ID_REQUIRED);
        const { response: { existsUser: existsDebtor }, } = await this.compareExistsDBUserWith.existsUser({
            id: debtorUniqueId,
            userId: debtorId,
        });
        if (!existsDebtor)
            throw new common_1.NotFoundException(_404_1.NOTFOUND_LOAN_DEBTOR);
        if (totalAmountLoan === 0)
            throw new common_1.BadRequestException(_400_1.LOAN_TOTAL_AMOUNT_REQUIRED);
        if (!loanRepaymentDate)
            throw new common_1.BadRequestException(_400_1.LOAN_REPAYMENT_DATE_REQUIRED);
        if (interest <= 0)
            throw new common_1.BadRequestException(_400_1.LOAN_INTEREST_REQUIRED);
        return await this.repository.create(dto);
    }
};
LoansCreateUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("CREATE")),
    __param(1, (0, common_1.Inject)("USERS_EXISTS_FOUND_BY_USER")),
    __metadata("design:paramtypes", [Object, Object])
], LoansCreateUseCase);
exports.LoansCreateUseCase = LoansCreateUseCase;
//# sourceMappingURL=loans.create.use.case.js.map