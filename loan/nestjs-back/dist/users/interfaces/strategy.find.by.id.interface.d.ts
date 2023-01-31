import { StrategyFindOutputDto, StrategyFindInputDto } from "../dtos/strategy.find.dto";
export interface StrategyFindByIdInterface {
    readonly strategyFindById: ({ id, }: StrategyFindInputDto) => Promise<StrategyFindOutputDto>;
}
