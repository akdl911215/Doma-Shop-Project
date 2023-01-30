import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsString,
  Matches,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { BaseCommonCoreDto } from "../../common/dtos/base.common.core.dto";

enum SosialType {
  KAKAO,
  NAVER,
  BASIC,
}

export class UsersBaseDto extends BaseCommonCoreDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    default: "",
  })
  @Matches(/^[A-za-z0-9ㄱ-ㅎㅏ-ㅣ가-힣]{2,12}$/, {
    message: "ID은 2자리 이상 12자리 이하입니다.",
  })
  public noteId!: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    format: "password",
  })
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
    message:
      "비밀번호는 최소 8자, 하나 이상의 문자, 하나의 숫자 및 하나의 특수문자입니다.",
  })
  public password!: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    default: "",
  })
  public name!: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    default: "",
  })
  public address!: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    default: "",
  })
  @Matches(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/, {
    message: "휴대폰번호를 올바르게 입력해주세요",
  })
  public phone!: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({
    type: "boolean",
    required: true,
    nullable: false,
  })
  public isMarketing!: boolean;

  @IsEnum(SosialType)
  @ApiProperty({
    enum: SosialType,
    required: false,
  })
  public social!: SosialType | string;

  @IsString()
  refreshToken?: string;

  @IsString()
  accessToken?: string;
}
