import { IsBoolean, IsEnum, IsString, Matches } from 'class-validator';
import { BaseCommonCoreDto } from '../../../common/abstract/base.common.core.dto';
import { ApiProperty } from '@nestjs/swagger';

enum SocialType {
  KAKAO,
  NAVER,
  BASIC,
}

enum BadgeType {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
}

export class UsersModel extends BaseCommonCoreDto {
  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    default: '',
  })
  @Matches(/^[A-za-z0-9ㄱ-ㅎㅏ-ㅣ가-힣]{2,12}$/, {
    message: 'ID은 2자리 이상 12자리 이하입니다.',
  })
  public investorId!: string;

  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    default: '',
  })
  public nickName: string;

  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    format: 'password',
  })
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
    message:
      '비밀번호는 최소 8자, 하나 이상의 문자, 하나의 숫자 및 하나의 특수문자입니다.',
  })
  public password!: string;

  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    default: '',
  })
  public phone!: string;

  @IsBoolean()
  @ApiProperty({
    description: '마케팅 수신 여부',
    type: Boolean,
    required: true,
    default: false,
  })
  public isMarketing!: boolean;

  @IsEnum(SocialType)
  @ApiProperty({
    enum: SocialType,
    required: false,
  })
  public social!: SocialType | string;

  @IsString()
  refreshToken?: string;

  @IsString()
  accessToken?: string;

  @IsString()
  @ApiProperty({
    description: '프로필 사진',
    type: String,
    required: false,
    nullable: true,
    default: null,
  })
  public profileImage?: string | null;

  @IsString()
  @ApiProperty({
    description: '프로필 배경 이미지',
    type: String,
    required: false,
    nullable: true,
    default: null,
  })
  public backImage?: string | null;
}
