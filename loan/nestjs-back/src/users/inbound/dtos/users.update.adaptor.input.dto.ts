import { ApiProperty, PickType } from "@nestjs/swagger";
import { UsersBaseDto } from "../../domain/entity/users.base.dto";
import { IsNotEmpty, IsString, Matches } from "class-validator";

export class UsersUpdateAdaptorInputDto extends PickType(UsersBaseDto, [
  "password",
  "name",
  "address",
  "phone",
] as const) {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    format: "password",
  })
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
    message:
      "컨펌 비밀번호는 최소 8자, 하나 이상의 문자, 하나의 숫자 및 하나의 특수문자입니다.",
  })
  confirmPassword!: string;
}


