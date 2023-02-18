import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { Request } from "express";
import { ConfigService } from "@nestjs/config";
import { UsersFindByIdUseCase } from "../application/usecase/users.find.by.id.use.case";
import { TokenService } from "../../../../common/infrastructures/token/token.service";
import { RefreshTokenPayloadType } from "../type/refresh.token.payload.type";
import { RefreshTokenStrategyOutputDto } from "../outbound/dtos/refresh.token.strategy.output.dto";
import { NOT_MATCH_REFRESH_TOKEN } from "../../../constants/http/errors/400";
import { AccessTokenPayloadType } from "../type/access.token.payload.type";

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  "JWT-REFRESH-TOKEN"
) {
  constructor(
    @Inject("USE_CASE_USERS_FIND_BY_ID")
    private readonly usersService: UsersFindByIdUseCase,
    private readonly configService: ConfigService,
    @Inject("TOKEN_SERVICE")
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
    payload: RefreshTokenPayloadType
  ): Promise<RefreshTokenStrategyOutputDto> {
    console.log("refresh ", request, payload);
    const token = request?.headers?.authorization?.split("Bearer ")[1];
    const user = await this.usersService.usersFindById({ id: payload.id });
    const { id, userId, phone, refreshToken } = user.response;

    if (token !== refreshToken)
      throw new BadRequestException(NOT_MATCH_REFRESH_TOKEN);

    const accessPayload: AccessTokenPayloadType = { id, userId };
    const refreshPayload: RefreshTokenPayloadType = { id, userId, phone };

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
