import { JwtService } from '@nestjs/jwt';
import { AccessTokenPayloadType } from './type/access.token.payload.type';
import { RefreshPayloadType } from './type/refresh.token.payload.type';
import { ConfigService } from '@nestjs/config';
import { GenerateTokenOutputDto } from './dto/generate.token.dto';
import { BcriptIncodedInterface } from '../bcript/interfaces/bcript.incoded.interface';
export declare class TokenService {
    private readonly jwtService;
    private readonly configService;
    private readonly hash;
    constructor(jwtService: JwtService, configService: ConfigService, hash: BcriptIncodedInterface);
    generateTokens(accessPayload: AccessTokenPayloadType, refreshPayload: RefreshPayloadType): Promise<GenerateTokenOutputDto>;
}
