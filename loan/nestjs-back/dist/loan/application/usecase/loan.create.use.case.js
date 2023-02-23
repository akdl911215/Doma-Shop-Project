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
exports.LoanCreateUseCase = void 0;
const common_1 = require("@nestjs/common");
const _400_1 = require("../../../_common/constants/http/errors/400");
let LoanCreateUseCase = class LoanCreateUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async create(dto) {
        const { creditorId, creditor, debtorId, debtor, totalAmountLoan, loanRepaymentDate, interest, } = dto;
        function confirmCreditorInput(creditorId, creditor) {
            if (!creditorId || !creditor)
                return true;
            else
                return false;
        }
        if (confirmCreditorInput(creditorId, creditor))
            throw new common_1.BadRequestException(_400_1.CONFIRM_REQUIRED_CREDITOR_INFORMATION);
        function confirmDebtorInput(debtorId, debtor) {
            if (!debtorId || !debtor)
                return true;
            else
                return false;
        }
        if (confirmDebtorInput(debtorId, debtor))
            throw new common_1.BadRequestException(_400_1.CONFIRM_REQUIRED_DEBTOR_INFORMATION);
        function confirmTotalAmountLoanInput(totalAmountLoan) {
            if (totalAmountLoan === 0)
                return true;
            else
                return false;
        }
        if (confirmTotalAmountLoanInput(totalAmountLoan))
            throw new common_1.BadRequestException(_400_1.CONFIRM_REQUIRED_LOAN_INFORMATION);
        function confirmLoanRepaymentDate(loanRepaymentDate) {
            if (!loanRepaymentDate)
                return true;
            else
                return false;
        }
        if (confirmLoanRepaymentDate(loanRepaymentDate))
            throw new common_1.BadRequestException(_400_1.CONFIRM_REQUIRED_LOAN_REPAYMENT_DATE_INFORMATION);
        function confirmInterest(interest) {
            if (interest <= 0)
                return true;
            else
                return false;
        }
        if (confirmInterest(interest))
            throw new common_1.BadRequestException(_400_1.CONFIRM_REQUIRED_LOAN_INTEREST_INFORMATION);
        return await this.repository.create(dto);
    }
};
LoanCreateUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("CREATE")),
    __metadata("design:paramtypes", [Object])
], LoanCreateUseCase);
exports.LoanCreateUseCase = LoanCreateUseCase;
//# sourceMappingURL=loan.create.use.case.js.map