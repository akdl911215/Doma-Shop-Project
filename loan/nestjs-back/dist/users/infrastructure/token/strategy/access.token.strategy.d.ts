import { Strategy } from "passport-jwt";
import { ConfigService } from "@nestjs/config";
import { StrategyPayloadIdAdaptorInputDto } from "../../../inbound/dtos/strategy.payload.id.adaptor.input.dto";
import { UsersModel } from "../../../domain/entity/users.model";
import { UsersFindByIdUseCase } from "../application/usecase/users.find.by.id.use.case";
import { BaseOutputDto } from "../../../../common/dtos/base.output.dto";
declare const AccessTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class AccessTokenStrategy extends AccessTokenStrategy_base {
    private readonly useCase;
    private readonly configService;
    constructor(useCase: UsersFindByIdUseCase, configService: ConfigService);
    validate({ id, }: StrategyPayloadIdAdaptorInputDto): Promise<BaseOutputDto<UsersModel>>;
}
export {};
