import { JwtService } from "@nestjs/jwt";
import { AccessTokenPayloadType } from "./type/access.token.payload.type";
import { ConfigService } from "@nestjs/config";
import { BcriptIncodedInterface } from "../bcript/interfaces/bcript.incoded.interface";
import { RefreshTokenPayloadType } from "./type/refresh.token.payload.type";
import { GenerateTokenOutputDto } from "./outbound/dtos/generate.token.output.dto";
export declare class TokenService {
    private readonly jwtService;
    private readonly configService;
    private readonly hash;
    constructor(jwtService: JwtService, configService: ConfigService, hash: BcriptIncodedInterface);
    generateTokens(accessPayload: AccessTokenPayloadType, refreshPayload: RefreshTokenPayloadType): Promise<GenerateTokenOutputDto>;
}
