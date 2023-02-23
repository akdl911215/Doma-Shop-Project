import { Module } from "@nestjs/common";
import { LoansService } from "./loans.service";
import { LoansCreateController } from "./infrastructure/presentation/loans.create.controller";
import { LoansCreateUseCase } from "./application/usecase/loans.create.use.case";
import { LoansCreateRepository } from "./infrastructure/repository/loans.create.repository";
import { PrismaService } from "../_common/infrastructures/prisma/prisma.service";

@Module({
  controllers: [LoansCreateController],
  providers: [
    // infrastructure
    PrismaService,

    // service

    // useCase
    {
      provide: "USE_CASE_CREATE",
      useClass: LoansCreateUseCase,
    },

    // repository
    {
      provide: "CREATE",
      useClass: LoansCreateRepository,
    },
  ],
})
export class LoansModule {}
