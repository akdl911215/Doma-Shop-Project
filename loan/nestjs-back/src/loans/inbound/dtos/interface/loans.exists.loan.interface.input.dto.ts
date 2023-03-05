import { IsNotEmpty, IsUUID } from "class-validator";

export class LoansExistsLoanInterfaceInputDto {
  @IsUUID()
  @IsNotEmpty()
  public id!: string;
}
