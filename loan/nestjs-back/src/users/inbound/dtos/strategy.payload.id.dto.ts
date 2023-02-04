import { IsUUID } from "class-validator";

export class StrategyPayloadIdInputDto {
  @IsUUID()
  public id!: string;
}
