import { ApiProperty, PickType } from "@nestjs/swagger";
import { UsersModel } from "../../domain/entity/users.model";
import { IsNotEmpty, IsString, Matches } from "class-validator";

export class UsersRegisterAdaptorInputDto extends PickType(UsersModel, [
  "userId",
  "nickname",
  "password",
  "name",
  "phone",
  "address",
] as const) {
  @ApiProperty({ type: String, required: true, format: "password" })
  public confirmPassword!: string;
}
