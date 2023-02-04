import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Inject, Injectable } from "@nestjs/common";
import { UsersBaseDto } from "../../../../users/domain/entity/users.base.dto";
import { BaseOutputDto } from "../../../dtos/base.output.dto";
import { StrategyFindByIdInterface } from "../../../../users/domain/adaptor/strategy.find.by.id.interface";
import { StrategyPayloadIdInputDto } from "../../../../users/inbound/dtos/strategy.payload.id.dto";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(
  Strategy,
  "JWT-ACCESS-TOKEN"
) {
  constructor(
    @Inject("STRATEGY_FIND_BY_ID")
    private readonly usersService: StrategyFindByIdInterface,
    private readonly configService: ConfigService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>("JWT_SECRET"),
    });
  }

  async validate({
    id,
  }: StrategyPayloadIdInputDto): Promise<BaseOutputDto<UsersBaseDto>> {
    return await this.usersService.strategyFindById({ id });
  }
}
