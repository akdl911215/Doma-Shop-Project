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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoansUpdateRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../_common/infrastructures/prisma/prisma.service");
const _404_1 = require("../../../_common/constants/http/errors/404");
let LoansUpdateRepository = class LoansUpdateRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async update(dto) {
        const { id, creditor, creditorId, debtor, debtorId, totalAmountLoan, interest, loanRepaymentDate, } = dto;
        const loan = await this.prisma.loans.findFirst({
            where: {
                OR: [
                    {
                        id,
                    },
                    {
                        creditorId,
                    },
                    {
                        debtorId,
                    },
                ],
            },
        });
        if (!loan)
            throw new common_1.NotFoundException(_404_1.NOTFOUND_LOAN);
        const updateCreditor = creditor === "" ? loan.creditor : creditor;
        const updateCreditorId = creditorId === "" ? loan.creditorId : creditorId;
        const updateDebtor = debtor === "" ? loan.debtor : debtor;
        const updateDebtorId = debtorId === "" ? loan.debtorId : debtorId;
        const updateTotalAmountLoan = totalAmountLoan < 0 ? loan.totalAmountLoan : totalAmountLoan;
        const updateInterest = interest < 1 ? loan.interest : interest;
        const updateLoanRepaymentDate = loanRepaymentDate === "" ? loan.loanRepaymentDate : loanRepaymentDate;
        try {
            const [updateLoan] = await this.prisma.$transaction([
                this.prisma.loans.update({
                    where: { id },
                    data: {
                        creditor: updateCreditor,
                        creditorId: updateCreditorId,
                        debtor: updateDebtor,
                        debtorId: updateDebtorId,
                        totalAmountLoan: updateTotalAmountLoan,
                        interest: updateInterest,
                        loanRepaymentDate: updateLoanRepaymentDate,
                    },
                }),
            ]);
            return { response: updateLoan };
        }
        catch (e) {
            if (e instanceof common_1.InternalServerErrorException) {
                throw new common_1.InternalServerErrorException(e);
            }
            else {
                throw new Error(`${e}`);
            }
        }
    }
};
LoansUpdateRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, common_1.Dependencies)([prisma_service_1.PrismaService]),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LoansUpdateRepository);
exports.LoansUpdateRepository = LoansUpdateRepository;
//# sourceMappingURL=loans.update.repository.js.map