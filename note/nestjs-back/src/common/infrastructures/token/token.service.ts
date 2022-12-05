import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccessTokenPayloadType } from './type/access.token.payload.type';
import { RefreshPayloadType } from './type/refresh.token.payload.type';
import { ConfigService } from '@nestjs/config';
import { GenerateTokenOutputDto } from './dto/generate.token.dto';
import { BcriptIncodedInterface } from '../bcript/interfaces/bcript.incoded.interface';

@Injectable()
export class TokenService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    @Inject('IN_CODED') private readonly hash: BcriptIncodedInterface,
  ) {}

  public async generateTokens(
    accessPayload: AccessTokenPayloadType,
    refreshPayload: RefreshPayloadType,
  ): Promise<GenerateTokenOutputDto> {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(accessPayload, {
        secret: this.configService.get<string>('JWT_SECRET'),
        expiresIn: this.configService.get<string>('JWT_ACCESS_EXPIRE_IN'),
      }),

      this.jwtService.signAsync(refreshPayload, {
        secret: this.configService.get<string>('JWT_SECRET'),
        expiresIn: this.configService.get<string>('JWT_REFRESH_EXPIRE_IN'),
      }),
    ]);

    return {
      response: {
        accessToken,
        refreshToken,
      },
    };
  }
}
