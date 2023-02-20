import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TokenService } from "./token.service";
import { Module } from "@nestjs/common";
import { PrismaService } from "../../../common/infrastructures/prisma/prisma.service";
import { PassportModule } from "@nestjs/passport";

const PASSPORT_MODULE = PassportModule.register({ session: false });
const JWT_MODULE = JwtModule.registerAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => ({
    secret: configService.get<string>("JWT_SECRET"),
  }),
});

@Module({
  imports: [JWT_MODULE, PASSPORT_MODULE],
  providers: [
    PrismaService,
    { provide: "TOKEN_SERVICE", useClass: TokenService },
  ],
  exports: [{ provide: "TOKEN_SERVICE", useClass: TokenService }],
})
export class TokenModule {}
