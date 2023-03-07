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
exports.LoansDebtorInquiryRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../_common/infrastructures/prisma/prisma.service");
const _404_1 = require("../../../_common/constants/http/errors/404");
let LoansDebtorInquiryRepository = class LoansDebtorInquiryRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async debtorInquiry(dto) {
        const { id, debtorUniqueId } = dto;
        const loan = await this.prisma.loans.findFirst({
            where: {
                AND: [
                    {
                        id,
                    },
                    {
                        debtorUniqueId,
                    },
                ],
            },
        });
        if (!loan)
            throw new common_1.NotFoundException(_404_1.NOTFOUND_LOAN);
        return { response: loan };
    }
};
LoansDebtorInquiryRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, common_1.Dependencies)([prisma_service_1.PrismaService]),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LoansDebtorInquiryRepository);
exports.LoansDebtorInquiryRepository = LoansDebtorInquiryRepository;
//# sourceMappingURL=loans.debtor.inquiry.repository.js.map