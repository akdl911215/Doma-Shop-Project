import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { StrategyFindByIdInterface } from "../../../../users/interfaces/strategy.find.by.id.interface";
import { Request } from "express";
import { RefreshPayloadType } from "../type/refresh.token.payload.type";
import { NOT_MATCH_REFRESH_TOKEN } from "../../../constants/http/errors/400";
import { ConfigService } from "@nestjs/config";
import { BaseOutputDto } from "../../../dtos/base.output.dto";
import { UsersBaseDto } from "../../../../users/dtos/users.base.dto";
import { TokenService } from "../token.service";
import { AccessTokenPayloadType } from "../type/access.token.payload.type";

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  "JWT-REFRESH-TOKEN"
) {
  constructor(
    @Inject("STRATEGY_FIND_BY_ID")
    private readonly usersService: StrategyFindByIdInterface,
    private readonly configService: ConfigService,
    private readonly jwtToken: TokenService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>("JWT_SECRET"),
      passReqToCallback: true,
    });
  }

  async validate(
    request: Request,
    payload: RefreshPayloadType
  ): Promise<BaseOutputDto<UsersBaseDto>> {
    const token = request?.headers?.authorization?.split("Bearer ")[1];
    const user = await this.usersService.strategyFindById({ id: payload.id });
    const { id, noteId, phone, refreshToken } = user.response;

    if (token !== refreshToken)
      throw new BadRequestException(NOT_MATCH_REFRESH_TOKEN);

    const accessPayload: AccessTokenPayloadType = { id, noteId };
    const refreshPayload: RefreshPayloadType = { id, noteId, phone };

    const {
      response: {
        accessToken: generateAccessToken,
        refreshToken: generateRefreshToken,
      },
    } = await this.jwtToken.generateTokens(accessPayload, refreshPayload);
    user.response.accessToken = generateAccessToken;
    user.response.refreshToken = generateRefreshToken;

    return user;
  }
}
