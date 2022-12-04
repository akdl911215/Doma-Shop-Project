import { IsDate, IsNumber } from 'class-validator';

export abstract class BaseCommonDto {
  @IsNumber()
  id: number;

  @IsDate()
  createAt: Date;

  @IsDate()
  updateAt: Date;
}
