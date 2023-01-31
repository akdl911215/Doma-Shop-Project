import { IsDate, IsNumber } from "class-validator";

export abstract class BaseCommonCoreDto {
  @IsNumber()
  readonly id!: number;

  @IsDate()
  readonly createdAt!: Date;

  @IsDate()
  readonly updatedAt!: Date;

  @IsDate()
  readonly deletedAt?: Date;
}
