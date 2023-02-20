import { Strategy } from "passport-jwt";
import { Request } from "express";
import { ConfigService } from "@nestjs/config";
import { UsersFindByIdUseCase } from "../application/usecase/users.find.by.id.use.case";
import { TokenService } from "../token.service";
import { RefreshTokenPayloadType } from "../type/refresh.token.payload.type";
import { RefreshTokenStrategyOutputDto } from "../outbound/dtos/refresh.token.strategy.output.dto";
declare const RefreshTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class RefreshTokenStrategy extends RefreshTokenStrategy_base {
    private readonly usersService;
    private readonly configService;
    private readonly jwtToken;
    constructor(usersService: UsersFindByIdUseCase, configService: ConfigService, jwtToken: TokenService);
    validate(request: Request, payload: RefreshTokenPayloadType): Promise<RefreshTokenStrategyOutputDto>;
}
export {};
