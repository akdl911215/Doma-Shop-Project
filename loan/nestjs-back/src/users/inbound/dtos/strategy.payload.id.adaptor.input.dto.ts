import { IsUUID } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class StrategyPayloadIdAdaptorInputDto {
  @IsUUID()
  @ApiProperty({
    type: String,
    required: true,
  })
  public id!: string;
}
