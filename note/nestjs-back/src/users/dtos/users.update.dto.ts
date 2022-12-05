import { PickType } from "@nestjs/swagger";
import { UsersBaseDto } from "./users.base.dto";
import { BaseOutputDto } from "../../common/dtos/base.output.dto";
import { IsNotEmpty, IsNumber } from "class-validator";

export class UpdateInputUser extends PickType(UsersBaseDto, [
  "password",
  "name",
  "address",
  "phone",
] as const) {
  @IsNumber()
  @IsNotEmpty()
  id!: number;
}

export class UpdateOutputUser extends BaseOutputDto<UsersBaseDto> {}
