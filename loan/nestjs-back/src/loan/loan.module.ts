import { Module } from "@nestjs/common";
import { LoanService } from "./loan.service";
import { LoanController } from "./infrastructure/presentation/loan2.controller";

@Module({
  providers: [LoanService],
  controllers: [LoanController],
})
export class LoanModule {}
