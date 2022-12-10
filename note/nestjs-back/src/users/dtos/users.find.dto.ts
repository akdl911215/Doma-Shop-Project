import { IsNotEmpty, IsNumber } from "class-validator";
import { BaseOutputDto } from "../../common/dtos/base.output.dto";
import { UsersBaseDto } from "./users.base.dto";

export class FindInputUser {
  @IsNumber()
  @IsNotEmpty()
  id!: number;
}

export class FindOutputUser extends BaseOutputDto<UsersBaseDto> {}
