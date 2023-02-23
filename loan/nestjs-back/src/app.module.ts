import { Module } from "@nestjs/common";
import { CONFIG_MODULE } from "./_common/infrastructures/env/config.module";
import { UsersModule } from "./users/users.module";
import { LoansModule } from "./loans/loans.module";

@Module({
  imports: [CONFIG_MODULE, UsersModule, LoansModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
