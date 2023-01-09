import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { ConfigService } from '@nestjs/config';
import { AccessTokenPayloadType } from '../type/access.token.payload.type';
import { TokenService } from '../token.service';
import { BaseOutputDto } from '../../../../common/outbound/dtos/base.output.dto';
import { UsersModel } from '../../../domain/entity/users.model';
import { NOT_MATCH_REFRESH_TOKEN } from '../../../../common/constants/http/errors/400';
import { RefreshTokenPayloadType } from '../type/refresh.token.payload.type';
import { UsersFindByIdUseCase } from '../application/usecase/users.find.by.id.use.case';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'JWT-REFRESH-TOKEN',
) {
  constructor(
    @Inject('USE_CASE_USERS_FIND_BY_ID')
    private readonly userCase: UsersFindByIdUseCase,
    private readonly configService: ConfigService,
    @Inject('TOKEN_SERVICE')
    private readonly jwtToken: TokenService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_REFRESH_SECRET'),
      passReqToCallback: true,
    });
  }

  async validate(
    request: Request,
    payload: RefreshTokenPayloadType,
  ): Promise<BaseOutputDto<UsersModel>> {
    const token = request?.headers?.authorization?.split('Bearer ')[1];
    const user = await this.userCase.usersFindById({ id: payload.id });
    const { id, investorId, phone, refreshToken } = user.response;

    if (token !== refreshToken)
      throw new BadRequestException(NOT_MATCH_REFRESH_TOKEN);

    const accessPayload: AccessTokenPayloadType = { id, investorId };
    const refreshPayload: RefreshTokenPayloadType = { id, investorId, phone };

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
