import { Module } from "@nestjs/common";
import { PrismaService } from "../_common/infrastructures/prisma/prisma.service";
import { UsersExistsUniqueIdRepository } from "./infrastructure/repository/users.exists.unique.id.repository";
import { CreditorsCreateRepository } from "./infrastructure/repository/creditors.create.repository";

@Module({
  controllers: [],
  providers: [
    // infrastructure
    PrismaService,

    // service

    // useCase

    // repository
    {
      provide: "CREATE",
      useClass: CreditorsCreateRepository,
    },
    {
      provide: "USERS_EXISTS_FOUND_BY_ID",
      useClass: UsersExistsUniqueIdRepository,
    },
  ],
})
export class CreditorsModule {}
