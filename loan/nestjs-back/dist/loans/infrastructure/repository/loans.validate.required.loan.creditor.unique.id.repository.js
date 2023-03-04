"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoansValidateRequiredLoanCreditorUniqueIdRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../_common/infrastructures/prisma/prisma.service");
const _400_1 = require("../../../_common/constants/http/errors/400");
let LoansValidateRequiredLoanCreditorUniqueIdRepository = class LoansValidateRequiredLoanCreditorUniqueIdRepository {
    async validateRequiredLoanCreditorUniqueId(dto) {
        const { creditorUniqueId } = dto;
        if (!creditorUniqueId)
            throw new common_1.BadRequestException(_400_1.CREDITOR_UNIQUE_ID_REQUIRED);
    }
};
LoansValidateRequiredLoanCreditorUniqueIdRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, common_1.Dependencies)([prisma_service_1.PrismaService])
], LoansValidateRequiredLoanCreditorUniqueIdRepository);
exports.LoansValidateRequiredLoanCreditorUniqueIdRepository = LoansValidateRequiredLoanCreditorUniqueIdRepository;
//# sourceMappingURL=loans.validate.required.loan.creditor.unique.id.repository.js.map