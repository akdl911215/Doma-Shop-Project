import { BaseOutputDto } from "../../common/dtos/base.output.dto";
import { UsersBaseDto } from "../domain/entity/users.base.dto";
import { IsNumber } from "class-validator";

export class StrategyFindInputDto {
  @IsNumber()
  id!: number;
}

export class StrategyFindOutputDto extends BaseOutputDto<UsersBaseDto> {}
