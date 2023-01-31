import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BcriptModule } from '../bcript/bcript.module';
import { BcriptService } from '../bcript/bcript.service';

const JWT_MODULE = JwtModule.registerAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => ({
    secret: configService.get<string>('JWT_SECRET'),
  }),
});

@Module({
  imports: [JWT_MODULE, BcriptModule],
  providers: [TokenService, BcriptService],
  exports: [TokenService, JWT_MODULE],
})
export class TokenModule {}
