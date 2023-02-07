import { ApiProperty, PickType } from "@nestjs/swagger";
import { UsersModel } from "../../domain/entity/users.model";
import { IsNotEmpty, IsUUID } from "class-validator";

export class UsersUpdatePasswordAdaptorInputDto extends PickType(UsersModel, [
  "password",
] as const) {
  @ApiProperty({ type: String, required: true, format: "password" })
  public confirmPassword!: string;

  @ApiProperty({ type: String, required: true, format: "password" })
  public currentPassword!: string;

  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({ type: String, required: true })
  public id!: string;
}
