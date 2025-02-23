import { IsNotEmpty, IsUUID } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UsersDeleteAdaptorInputDto {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
  })
  public id!: string;
}
