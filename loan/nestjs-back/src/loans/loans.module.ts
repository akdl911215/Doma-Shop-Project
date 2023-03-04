import { Module } from "@nestjs/common";
import { LoansCreateController } from "./infrastructure/presentation/loans.create.controller";
import { LoansCreateUseCase } from "./application/usecase/loans.create.use.case";
import { LoansCreateRepository } from "./infrastructure/repository/loans.create.repository";
import { PrismaService } from "../_common/infrastructures/prisma/prisma.service";
import { LoansInquiryController } from "./infrastructure/presentation/loans.inquiry.controller";
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
import { LoansValidateRequiredLoanCreditorUniqueIdRepository } from "./infrastructure/repository/loans.validate.required.loan.creditor.unique.id.repository";
import { LoansValidateRequiredLoanDebtorUniqueIdRepository } from "./infrastructure/repository/loans.validate.required.loan.debtor.unique.id.repository";
import { LoansValidateRequiredLoanUniqueIdRepository } from "./infrastructure/repository/loans.validate.required.loan.unique.id.repository";

@Module({
  controllers: [
    LoansListController,
    LoansCreateController,
    LoansInquiryController,
    LoansDeleteController,
    LoansUpdateController,
  ],
  providers: [
    // infrastructure
    PrismaService,

    // service

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
      provide: "USE_CASE_INQUIRY",
      useClass: LoansInquiryUseCase,
    },
    {
      provide: "USE_CASE_DELETE",
      useClass: LoansDeleteUseCase,
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
      provide: "VALIDATE_REQUIRED_LOAN_CREDITOR_UNIQUE_ID",
      useClass: LoansValidateRequiredLoanCreditorUniqueIdRepository,
    },
    {
      provide: "VALIDATE_REQUIRED_LOAN_DEBTOR_UNIQUE_ID",
      useClass: LoansValidateRequiredLoanDebtorUniqueIdRepository,
    },
    {
      provide: "VALIDATE_REQUIRED_LOAN_UNIQUE_ID",
      useClass: LoansValidateRequiredLoanUniqueIdRepository,
    },
  ],
})
export class LoansModule {}
