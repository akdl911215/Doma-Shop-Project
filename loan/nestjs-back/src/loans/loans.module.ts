import { Module } from "@nestjs/common";
import { LoansCreateController } from "./infrastructure/presentation/loans.create.controller";
import { LoansCreateUseCase } from "./application/usecase/loans.create.use.case";
import { LoansCreateRepository } from "./infrastructure/repository/loans.create.repository";
import { PrismaService } from "../_common/infrastructures/prisma/prisma.service";
import { LoansListController } from "./infrastructure/presentation/loans.list.controller";
import { LoansDeleteController } from "./infrastructure/presentation/loans.delete.controller";
import { LoansUpdateController } from "./infrastructure/presentation/loans.update.controller";
import { LoansListUseCase } from "./application/usecase/loans.list.use.case";
import { LoansUpdateUseCase } from "./application/usecase/loans.update.use.case";
import { LoansInquiryUseCase } from "./application/usecase/loans.inquiry.use.case";
import { LoansDeleteUseCase } from "./application/usecase/loans.delete.use.case";
import { LoansDeleteRepository } from "./infrastructure/repository/loans.delete.repository";
import { LoansInquiryRepository } from "./infrastructure/repository/loans.inquiry.repository";
import { LoansListRepository } from "./infrastructure/repository/loans.list.repository";
import { LoansUpdateRepository } from "./infrastructure/repository/loans.update.repository";
import { LoansExistsLoanCreditorUniqueIdRepository } from "./infrastructure/repository/loans.exists.loan.creditor.unique.id.repository";
import { LoansExistsLoanDebtorUniqueIdRepository } from "./infrastructure/repository/loans.exists.loan.debtor.unique.id.repository";
import { LoansExistsLoanUniqueIdRepository } from "./infrastructure/repository/loans.exists.loan.unique.id.repository";
import { LoansDebtorInquiryUseCase } from "./application/usecase/loans.debtor.inquiry.use.case";
import { LoansCreditorInquiryUseCase } from "./application/usecase/loans.creditor.inquiry.use.case";
import { LoansCreditorInquiryRepository } from "./infrastructure/repository/loans.creditor.inquiry.repository";
import { LoansDebtorInquiryRepository } from "./infrastructure/repository/loans.debtor.inquiry.repository";
import { LoansSearchByUniqueIdRepository } from "./infrastructure/repository/loans.search.by.unique.id.repository";
import { LoansCreditorInquiryController } from "./infrastructure/presentation/loans.creditor.inquiry.controller";
import { LoansDebtorInquiryController } from "./infrastructure/presentation/loans.debtor.inquiry.controller";
import { UsersExistsUniqueIdRepository } from "./infrastructure/repository/users.exists.unique.id.repository";
import { UsersExistsUserIdRepository } from "./infrastructure/repository/users.exists.user.id.repository";
import { UsersExistsUserRepository } from "./infrastructure/repository/users.exists.user.repository";

@Module({
  controllers: [
    LoansListController,
    LoansCreateController,
    // LoansInquiryController,
    LoansCreditorInquiryController,
    LoansDebtorInquiryController,
    LoansDeleteController,
    LoansUpdateController,
  ],
  providers: [
    // infrastructure
    PrismaService,

    // services

    // useCase
    {
      provide: "USE_CASE_CREATE",
      useClass: LoansCreateUseCase,
    },
    {
      provide: "USE_CASE_LIST",
      useClass: LoansListUseCase,
    },
    {
      provide: "USE_CASE_UPDATE",
      useClass: LoansUpdateUseCase,
    },
    {
      provide: "USE_CASE_DELETE",
      useClass: LoansDeleteUseCase,
    },
    {
      provide: "USE_CASE_INQUIRY",
      useClass: LoansInquiryUseCase,
    },
    {
      provide: "USE_CASE_DEBTOR_INQUIRY",
      useClass: LoansDebtorInquiryUseCase,
    },
    {
      provide: "USE_CASE_CREDITOR_INQUIRY",
      useClass: LoansCreditorInquiryUseCase,
    },

    // repository
    {
      provide: "CREATE",
      useClass: LoansCreateRepository,
    },
    {
      provide: "DELETE",
      useClass: LoansDeleteRepository,
    },
    {
      provide: "INQUIRY",
      useClass: LoansInquiryRepository,
    },
    {
      provide: "CREDITOR_INQUIRY",
      useClass: LoansCreditorInquiryRepository,
    },
    {
      provide: "DEBTOR_INQUIRY",
      useClass: LoansDebtorInquiryRepository,
    },
    {
      provide: "LIST",
      useClass: LoansListRepository,
    },
    {
      provide: "UPDATE",
      useClass: LoansUpdateRepository,
    },
    {
      provide: "EXISTS_LOAN_CREDITOR_UNIQUE_ID",
      useClass: LoansExistsLoanCreditorUniqueIdRepository,
    },
    {
      provide: "EXISTS_LOAN_DEBTOR_UNIQUE_ID",
      useClass: LoansExistsLoanDebtorUniqueIdRepository,
    },
    {
      provide: "EXISTS_LOAN_UNIQUE_ID",
      useClass: LoansExistsLoanUniqueIdRepository,
    },
    {
      provide: "EXISTS_LOAN",
      useClass: LoansSearchByUniqueIdRepository,
    },
    {
      provide: "SEARCH_UNIQUE_ID",
      useClass: LoansSearchByUniqueIdRepository,
    },
    {
      provide: "USERS_EXISTS_FOUND_BY_ID",
      useClass: UsersExistsUniqueIdRepository,
    },
    {
      provide: "USERS_EXISTS_FOUND_BY_USER_ID",
      useClass: UsersExistsUserIdRepository,
    },
    {
      provide: "USERS_EXISTS_FOUND_BY_USER",
      useClass: UsersExistsUserRepository,
    },
  ],
})
export class LoansModule {}
