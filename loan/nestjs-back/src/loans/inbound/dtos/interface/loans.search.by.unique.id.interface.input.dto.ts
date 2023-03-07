import { IsNotEmpty, IsUUID } from "class-validator";

export class LoansSearchByUniqueIdInterfaceInputDto {
  @IsUUID()
  @IsNotEmpty()
  public id!: string;
}
