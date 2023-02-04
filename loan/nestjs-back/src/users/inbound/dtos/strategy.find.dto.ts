import { BaseOutputDto } from "../../../common/dtos/base.output.dto";
import { UsersModel } from "../../domain/entity/users.model";
import { IsUUID } from "class-validator";

export class StrategyFindInputDto {
  @IsUUID()
  public id!: string;
}

export class StrategyFindOutputDto extends BaseOutputDto<UsersModel> {}
