"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoansModule = void 0;
const common_1 = require("@nestjs/common");
const loans_create_controller_1 = require("./infrastructure/presentation/loans.create.controller");
const loans_create_use_case_1 = require("./application/usecase/loans.create.use.case");
const loans_create_repository_1 = require("./infrastructure/repository/loans.create.repository");
const prisma_service_1 = require("../_common/infrastructures/prisma/prisma.service");
let LoansModule = class LoansModule {
};
LoansModule = __decorate([
    (0, common_1.Module)({
        controllers: [loans_create_controller_1.LoansCreateController],
        providers: [
            prisma_service_1.PrismaService,
            {
                provide: "USE_CASE_CREATE",
                useClass: loans_create_use_case_1.LoansCreateUseCase,
            },
            {
                provide: "CREATE",
                useClass: loans_create_repository_1.LoansCreateRepository,
            },
        ],
    })
], LoansModule);
exports.LoansModule = LoansModule;
//# sourceMappingURL=loans.module.js.map