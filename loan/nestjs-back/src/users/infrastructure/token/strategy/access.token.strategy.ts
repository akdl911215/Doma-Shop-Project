import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { UsersFindByIdUseCase } from "../application/usecase/users.find.by.id.use.case";
import { StrategyPayloadIdAdaptorInputDto } from "../../../inbound/dtos/strategy.payload.id.adaptor.input.dto";
import { StrategyPayloadIdAdaptorOutputDto } from "../../../outbound/dtos/strategy.payload.id.adaptor.output.dto";

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(
  Strategy,
  "JWT-ACCESS-TOKEN"
) {
  constructor(
    @Inject("USE_CASE_USERS_FIND_BY_ID")
    private readonly useCase: UsersFindByIdUseCase,
    private readonly configService: ConfigService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>("JWT_ACCESS_SECRET"),
    });
    console.log("secretOrKey", configService.get<string>("JWT_ACCESS_SECRET"));
  }

  async validate({
    id,
  }: StrategyPayloadIdAdaptorInputDto): Promise<StrategyPayloadIdAdaptorOutputDto> {
    console.log("strategy id : ", id);
    const user = await this.useCase.usersFindById({ id });
    console.log("strategy user : ", user);
    return user;
  }
}
