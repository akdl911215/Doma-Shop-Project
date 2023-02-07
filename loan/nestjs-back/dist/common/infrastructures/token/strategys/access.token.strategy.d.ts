import { Strategy } from "passport-jwt";
import { UsersModel } from "../../../../users/domain/entity/users.model";
import { BaseOutputDto } from "../../../dtos/base.output.dto";
import { StrategyFindByIdInterface } from "../../../../users/domain/adaptor/strategy.find.by.id.interface";
import { StrategyPayloadIdInputDto } from "../../../../users/inbound/dtos/strategy.payload.id.dto";
import { ConfigService } from "@nestjs/config";
declare const AccessTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class AccessTokenStrategy extends AccessTokenStrategy_base {
    private readonly usersService;
    private readonly configService;
    constructor(usersService: StrategyFindByIdInterface, configService: ConfigService);
    validate({ id, }: StrategyPayloadIdInputDto): Promise<BaseOutputDto<UsersModel>>;
}
export {};
