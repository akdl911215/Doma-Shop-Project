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
const loans_inquiry_controller_1 = require("./infrastructure/presentation/loans.inquiry.controller");
const loans_list_controller_1 = require("./infrastructure/presentation/loans.list.controller");
const loans_delete_controller_1 = require("./infrastructure/presentation/loans.delete.controller");
const loans_update_controller_1 = require("./infrastructure/presentation/loans.update.controller");
const loans_list_use_case_1 = require("./application/usecase/loans.list.use.case");
const loans_update_use_case_1 = require("./application/usecase/loans.update.use.case");
const loans_inquiry_use_case_1 = require("./application/usecase/loans.inquiry.use.case");
const loans_delete_use_case_1 = require("./application/usecase/loans.delete.use.case");
const loans_delete_repository_1 = require("./infrastructure/repository/loans.delete.repository");
const loans_inquiry_repository_1 = require("./infrastructure/repository/loans.inquiry.repository");
const loans_list_repository_1 = require("./infrastructure/repository/loans.list.repository");
const loans_update_repository_1 = require("./infrastructure/repository/loans.update.repository");
const loans_exists_loan_creditor_unique_id_repository_1 = require("./infrastructure/repository/loans.exists.loan.creditor.unique.id.repository");
const loans_exists_loan_debtor_unique_id_repository_1 = require("./infrastructure/repository/loans.exists.loan.debtor.unique.id.repository");
const loans_exists_loan_unique_id_repository_1 = require("./infrastructure/repository/loans.exists.loan.unique.id.repository");
const loans_validate_required_loan_creditor_unique_id_repository_1 = require("./infrastructure/repository/loans.validate.required.loan.creditor.unique.id.repository");
const loans_validate_required_loan_debtor_unique_id_repository_1 = require("./infrastructure/repository/loans.validate.required.loan.debtor.unique.id.repository");
const loans_validate_required_loan_unique_id_repository_1 = require("./infrastructure/repository/loans.validate.required.loan.unique.id.repository");
let LoansModule = class LoansModule {
};
LoansModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            loans_list_controller_1.LoansListController,
            loans_create_controller_1.LoansCreateController,
            loans_inquiry_controller_1.LoansInquiryController,
            loans_delete_controller_1.LoansDeleteController,
            loans_update_controller_1.LoansUpdateController,
        ],
        providers: [
            prisma_service_1.PrismaService,
            {
                provide: "USE_CASE_CREATE",
                useClass: loans_create_use_case_1.LoansCreateUseCase,
            },
            {
                provide: "USE_CASE_LIST",
                useClass: loans_list_use_case_1.LoansListUseCase,
            },
            {
                provide: "USE_CASE_UPDATE",
                useClass: loans_update_use_case_1.LoansUpdateUseCase,
            },
            {
                provide: "USE_CASE_INQUIRY",
                useClass: loans_inquiry_use_case_1.LoansInquiryUseCase,
            },
            {
                provide: "USE_CASE_DELETE",
                useClass: loans_delete_use_case_1.LoansDeleteUseCase,
            },
            {
                provide: "CREATE",
                useClass: loans_create_repository_1.LoansCreateRepository,
            },
            {
                provide: "DELETE",
                useClass: loans_delete_repository_1.LoansDeleteRepository,
            },
            {
                provide: "INQUIRY",
                useClass: loans_inquiry_repository_1.LoansInquiryRepository,
            },
            {
                provide: "LIST",
                useClass: loans_list_repository_1.LoansListRepository,
            },
            {
                provide: "UPDATE",
                useClass: loans_update_repository_1.LoansUpdateRepository,
            },
            {
                provide: "EXISTS_LOAN_CREDITOR_UNIQUE_ID",
                useClass: loans_exists_loan_creditor_unique_id_repository_1.LoansExistsLoanCreditorUniqueIdRepository,
            },
            {
                provide: "EXISTS_LOAN_DEBTOR_UNIQUE_ID",
                useClass: loans_exists_loan_debtor_unique_id_repository_1.LoansExistsLoanDebtorUniqueIdRepository,
            },
            {
                provide: "EXISTS_LOAN_UNIQUE_ID",
                useClass: loans_exists_loan_unique_id_repository_1.LoansExistsLoanUniqueIdRepository,
            },
            {
                provide: "VALIDATE_REQUIRED_LOAN_CREDITOR_UNIQUE_ID",
                useClass: loans_validate_required_loan_creditor_unique_id_repository_1.LoansValidateRequiredLoanCreditorUniqueIdRepository,
            },
            {
                provide: "VALIDATE_REQUIRED_LOAN_DEBTOR_UNIQUE_ID",
                useClass: loans_validate_required_loan_debtor_unique_id_repository_1.LoansValidateRequiredLoanDebtorUniqueIdRepository,
            },
            {
                provide: "VALIDATE_REQUIRED_LOAN_UNIQUE_ID",
                useClass: loans_validate_required_loan_unique_id_repository_1.LoansValidateRequiredLoanUniqueIdRepository,
            },
        ],
    })
], LoansModule);
exports.LoansModule = LoansModule;
//# sourceMappingURL=loans.module.js.map