import { Strategy } from "passport-jwt";
import { UsersBaseDto } from "../../../../users/dtos/users.base.dto";
import { BaseOutputDto } from "../../../dtos/base.output.dto";
import { StrategyFindByIdInterface } from "../../../../users/interfaces/strategy.find.by.id.interface";
import { StrategyPayloadIdInputDto } from "../../../../users/dtos/strategy.payload.id.dto";
import { ConfigService } from "@nestjs/config";
declare const AccessTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class AccessTokenStrategy extends AccessTokenStrategy_base {
    private readonly usersService;
    private readonly configService;
    constructor(usersService: StrategyFindByIdInterface, configService: ConfigService);
    validate({ id, }: StrategyPayloadIdInputDto): Promise<BaseOutputDto<UsersBaseDto>>;
}
export {};
