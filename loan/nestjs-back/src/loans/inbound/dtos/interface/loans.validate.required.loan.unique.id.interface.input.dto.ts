import { IsNotEmpty, IsUUID } from "class-validator";

export class LoansValidateRequiredLoanUniqueIdInterfaceInputDto {
  @IsUUID()
  @IsNotEmpty()
  public id!: string;
}
