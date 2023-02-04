import { BaseOutputDto } from "../../../common/dtos/base.output.dto";
import { UsersBaseDto } from "../../domain/entity/users.base.dto";
import { IsUUID } from "class-validator";

export class StrategyFindInputDto {
  @IsUUID()
  public id!: string;
}

export class StrategyFindOutputDto extends BaseOutputDto<UsersBaseDto> {}
