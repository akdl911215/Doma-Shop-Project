import { IsNotEmpty, IsUUID } from "class-validator";

export class LoansValidateRequiredLoanCreditorUniqueIdInterfaceInputDto {
  @IsUUID()
  @IsNotEmpty()
  public id!: string;
}
