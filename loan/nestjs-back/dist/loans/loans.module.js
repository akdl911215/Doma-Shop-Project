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
const loans_debtor_inquiry_use_case_1 = require("./application/usecase/loans.debtor.inquiry.use.case");
const loans_creditor_inquiry_use_case_1 = require("./application/usecase/loans.creditor.inquiry.use.case");
const loans_creditor_inquiry_repository_1 = require("./infrastructure/repository/loans.creditor.inquiry.repository");
const loans_debtor_inquiry_repository_1 = require("./infrastructure/repository/loans.debtor.inquiry.repository");
const loans_search_by_unique_id_repository_1 = require("./infrastructure/repository/loans.search.by.unique.id.repository");
const loans_creditor_inquiry_controller_1 = require("./infrastructure/presentation/loans.creditor.inquiry.controller");
const loans_debtor_inquiry_controller_1 = require("./infrastructure/presentation/loans.debtor.inquiry.controller");
const users_exists_unique_id_repository_1 = require("./infrastructure/repository/users.exists.unique.id.repository");
const users_exists_user_id_repository_1 = require("./infrastructure/repository/users.exists.user.id.repository");
const users_exists_user_repository_1 = require("./infrastructure/repository/users.exists.user.repository");
let LoansModule = class LoansModule {
};
LoansModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            loans_list_controller_1.LoansListController,
            loans_create_controller_1.LoansCreateController,
            loans_creditor_inquiry_controller_1.LoansCreditorInquiryController,
            loans_debtor_inquiry_controller_1.LoansDebtorInquiryController,
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
                provide: "USE_CASE_DELETE",
                useClass: loans_delete_use_case_1.LoansDeleteUseCase,
            },
            {
                provide: "USE_CASE_INQUIRY",
                useClass: loans_inquiry_use_case_1.LoansInquiryUseCase,
            },
            {
                provide: "USE_CASE_DEBTOR_INQUIRY",
                useClass: loans_debtor_inquiry_use_case_1.LoansDebtorInquiryUseCase,
            },
            {
                provide: "USE_CASE_CREDITOR_INQUIRY",
                useClass: loans_creditor_inquiry_use_case_1.LoansCreditorInquiryUseCase,
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
                provide: "CREDITOR_INQUIRY",
                useClass: loans_creditor_inquiry_repository_1.LoansCreditorInquiryRepository,
            },
            {
                provide: "DEBTOR_INQUIRY",
                useClass: loans_debtor_inquiry_repository_1.LoansDebtorInquiryRepository,
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
                provide: "EXISTS_LOAN",
                useClass: loans_search_by_unique_id_repository_1.LoansSearchByUniqueIdRepository,
            },
            {
                provide: "SEARCH_UNIQUE_ID",
                useClass: loans_search_by_unique_id_repository_1.LoansSearchByUniqueIdRepository,
            },
            {
                provide: "USERS_EXISTS_FOUND_BY_ID",
                useClass: users_exists_unique_id_repository_1.UsersExistsUniqueIdRepository,
            },
            {
                provide: "USERS_EXISTS_FOUND_BY_USER_ID",
                useClass: users_exists_user_id_repository_1.UsersExistsUserIdRepository,
            },
            {
                provide: "USERS_EXISTS_FOUND_BY_USER",
                useClass: users_exists_user_repository_1.UsersExistsUserRepository,
            },
        ],
    })
], LoansModule);
exports.LoansModule = LoansModule;
//# sourceMappingURL=loans.module.js.map