import { IsDate, IsUUID } from "class-validator";

export abstract class BaseCommonCoreDto {
  @IsUUID()
  readonly id!: string;

  @IsDate()
  readonly createdAt!: Date;

  @IsDate()
  readonly updatedAt!: Date;

  @IsDate()
  readonly deletedAt?: Date;
}
