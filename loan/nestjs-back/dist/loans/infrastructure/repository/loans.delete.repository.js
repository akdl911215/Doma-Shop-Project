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
exports.LoansDeleteRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../_common/infrastructures/prisma/prisma.service");
const _404_1 = require("../../../_common/constants/http/errors/404");
let LoansDeleteRepository = class LoansDeleteRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async delete(dto) {
        const { id, debtorUniqueId, creditorUniqueId } = dto;
        const loan = await this.prisma.loans.findUnique({ where: { id } });
        if (!loan)
            throw new common_1.NotFoundException(_404_1.NOTFOUND_LOAN);
        const searchDebtor = await this.prisma.users.findUnique({
            where: { id: debtorUniqueId },
        });
        if (!searchDebtor)
            throw new common_1.NotFoundException(_404_1.NOTFOUND_DEBTOR);
        const searchCreditor = await this.prisma.users.findUnique({
            where: { id: creditorUniqueId },
        });
        if (!searchCreditor)
            throw new common_1.NotFoundException(_404_1.NOTFOUND_CREDITOR);
        const searchLoan = await this.prisma.loans.findFirst({
            where: {
                AND: [
                    {
                        id,
                    },
                    {
                        debtorUniqueId,
                    },
                    {
                        creditorUniqueId,
                    },
                ],
            },
        });
        if (!!searchLoan) {
            try {
                await this.prisma.$transaction([
                    this.prisma.loans.delete({
                        where: { id },
                    }),
                ]);
                return { response: { loanErase: true } };
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
        else {
            throw new common_1.NotFoundException(_404_1.NOTFOUND_LOAN);
        }
    }
};
LoansDeleteRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, common_1.Dependencies)([prisma_service_1.PrismaService]),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LoansDeleteRepository);
exports.LoansDeleteRepository = LoansDeleteRepository;
//# sourceMappingURL=loans.delete.repository.js.map