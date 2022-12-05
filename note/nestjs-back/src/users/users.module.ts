import { Logger, Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { PrismaService } from "../prisma.service";
import { TokenService } from "../common/infrastructures/token/token.service";
import { BcriptService } from "../common/infrastructures/bcript/bcript.service";
import { RefreshTokenStrategy } from "../common/infrastructures/token/strategys/refresh.token.strategy";
import { AccessTokenStrategy } from "../common/infrastructures/token/strategys/access.token.strategy";
import { TokenModule } from "../common/infrastructures/token/token.module";
import { BcriptModule } from "../common/infrastructures/bcript/bcript.module";
import { PassportModule } from "@nestjs/passport";

@Module({
  imports: [PassportModule, BcriptModule, TokenModule],
  controllers: [UsersController],
  providers: [
    AccessTokenStrategy,
    RefreshTokenStrategy,
    PrismaService,
    BcriptService,
    Logger,
    TokenService,
    {
      provide: "USERS_SERVICE",
      useClass: UsersService,
    },
    {
      provide: "STRATEGY_FIND_BY_ID",
      useClass: UsersService,
    },
  ],
  exports: [
    {
      provide: "USERS_SERVICE",
      useClass: UsersService,
    },
    {
      provide: "STRATEGY_FIND_BY_ID",
      useClass: UsersService,
    },
  ],
})
export class UsersModule {}
