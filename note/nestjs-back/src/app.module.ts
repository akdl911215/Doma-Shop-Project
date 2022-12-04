import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import { PrismaService } from "./prisma.service";
import { UsersService } from "./users/users.service";

const CONFIG_MODULE = ConfigModule.forRoot({
  isGlobal: true,
  envFilePath:
    process.env.NODE_ENV === "production"
      ? ".env.production"
      : process.env.NODE_ENV === "development"
      ? ".env.development"
      : ".env",
});

@Module({
  imports: [CONFIG_MODULE, UsersModule],
  controllers: [],
  providers: [
    PrismaService,
    {
      provide: "USERS_SERVICE",
      useClass: UsersService,
    },
  ],
  exports: [
    {
      provide: "USERS_SERVICE",
      useClass: UsersService,
    },
  ],
})
export class AppModule {}
