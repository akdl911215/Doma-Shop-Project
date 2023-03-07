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
exports.LoansUpdateUseCase = void 0;
const common_1 = require("@nestjs/common");
const _400_1 = require("../../../_common/constants/http/errors/400");
let LoansUpdateUseCase = class LoansUpdateUseCase {
    constructor(repository, existsDBLoanWith, searchDBUniqueIdWith) {
        this.repository = repository;
        this.existsDBLoanWith = existsDBLoanWith;
        this.searchDBUniqueIdWith = searchDBUniqueIdWith;
    }
    async update(dto) {
        const { id, creditorId, creditorUniqueId, debtorId, debtorUniqueId, totalAmountLoan, interest, loanRepaymentDate, } = dto;
        if (!id)
            throw new common_1.BadRequestException(_400_1.UNIQUE_ID_REQUIRED);
        const { response: { existsLoanUniqueId }, } = await this.existsDBLoanWith.existsLoanUniqueId({ id });
        if (existsLoanUniqueId)
            throw new common_1.BadRequestException(_400_1.LOAN_UNIQUE_ID_REQUIRED);
        const loan = await this.searchDBUniqueIdWith.searchByUniqueId({ id });
        const updateCreditorUniqueId = creditorUniqueId === ""
            ? loan.response.creditorUniqueId
            : creditorUniqueId;
        const updateCreditorId = creditorId === "" ? loan.response.creditorId : creditorId;
        const updateDebtorUniqueId = debtorUniqueId === "" ? loan.response.debtorUniqueId : debtorUniqueId;
        const updateDebtorId = debtorId === "" ? loan.response.debtorId : debtorId;
        const updateTotalAmountLoan = totalAmountLoan < 0 ? loan.response.totalAmountLoan : totalAmountLoan;
        const updateInterest = interest < 1 ? loan.response.interest : interest;
        const updateLoanRepaymentDate = loanRepaymentDate === ""
            ? loan.response.loanRepaymentDate
            : loanRepaymentDate;
        return await this.repository.update(Object.assign(Object.assign({}, dto), { creditorUniqueId: updateCreditorUniqueId, creditorId: updateCreditorId, debtorUniqueId: updateDebtorUniqueId, debtorId: updateDebtorId, totalAmountLoan: updateTotalAmountLoan, interest: updateInterest, loanRepaymentDate: updateLoanRepaymentDate }));
    }
};
LoansUpdateUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("UPDATE")),
    __param(1, (0, common_1.Inject)("EXISTS_LOAN")),
    __param(2, (0, common_1.Inject)("SEARCH_UNIQUE_ID")),
    __metadata("design:paramtypes", [Object, Object, Object])
], LoansUpdateUseCase);
exports.LoansUpdateUseCase = LoansUpdateUseCase;
//# sourceMappingURL=loans.update.use.case.js.map