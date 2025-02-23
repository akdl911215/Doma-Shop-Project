import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class GenerateTokenInputDto {
  @IsString()
  @ApiProperty({
    description: "access-token",
    type: String,
    required: false,
    default: null,
  })
  public accessToken!: string;
  @IsString()
  @ApiProperty({
    description: "refresh-token",
    type: String,
    required: false,
    default: null,
  })
  public refreshToken!: string;
}
