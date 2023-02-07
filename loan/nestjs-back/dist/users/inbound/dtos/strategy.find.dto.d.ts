import { BaseOutputDto } from "../../../common/dtos/base.output.dto";
import { UsersModel } from "../../domain/entity/users.model";
export declare class StrategyFindInputDto {
    id: string;
}
export declare class StrategyFindOutputDto extends BaseOutputDto<UsersModel> {
}
