import { IsDate, IsNumber } from "class-validator";

export abstract class BaseCommonDto {
  @IsNumber()
  id: number;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
