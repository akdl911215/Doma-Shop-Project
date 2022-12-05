import { IsNumber } from "class-validator";

export class StrategyPayloadIdInputDto {
  @IsNumber()
  id!: number;
}
