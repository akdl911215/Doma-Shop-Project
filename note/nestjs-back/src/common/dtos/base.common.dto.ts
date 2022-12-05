import { IsDate, IsNumber } from 'class-validator';

export abstract class CommonCoreDto {
  @IsNumber()
  readonly id: number;

  @IsDate()
  readonly createdAt: Date;

  @IsDate()
  readonly updatedAt: Date;
}
