import { IsNumber } from 'class-validator';

export class StrategyPayloadIdAdaptorInputDto {
  @IsNumber()
  id!: number;
}
