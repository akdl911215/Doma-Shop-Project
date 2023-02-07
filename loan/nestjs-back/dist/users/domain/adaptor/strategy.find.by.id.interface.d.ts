import { StrategyFindOutputDto, StrategyFindInputDto } from "../../inbound/dtos/strategy.find.dto";
export interface StrategyFindByIdInterface {
    readonly strategyFindById: ({ id, }: StrategyFindInputDto) => Promise<StrategyFindOutputDto>;
}
