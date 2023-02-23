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
exports.LoansCreateRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../_common/infrastructures/prisma/prisma.service");
const _404_1 = require("../../../_common/constants/http/errors/404");
let LoansCreateRepository = class LoansCreateRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const { debtor, debtorId, creditor, creditorId, totalAmountLoan, loanRepaymentDate, interest, } = dto;
        const dbDebtor = await this.prisma.users.findUnique({
            where: { id: debtorId },
        });
        const dbCreditor = await this.prisma.users.findUnique({
            where: { id: creditorId },
        });
        if (!dbDebtor || !dbCreditor)
            throw new common_1.NotFoundException(_404_1.NOTFOUND_USER);
        try {
            const [createLoan] = await this.prisma.$transaction([
                this.prisma.loans.create({
                    data: {
                        debtor,
                        debtorId,
                        creditor,
                        creditorId,
                        totalAmountLoan,
                        loanRepaymentDate,
                        interest,
                    },
                }),
            ]);
            return { response: createLoan };
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
LoansCreateRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, common_1.Dependencies)([prisma_service_1.PrismaService]),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LoansCreateRepository);
exports.LoansCreateRepository = LoansCreateRepository;
//# sourceMappingURL=loans.create.repository.js.map