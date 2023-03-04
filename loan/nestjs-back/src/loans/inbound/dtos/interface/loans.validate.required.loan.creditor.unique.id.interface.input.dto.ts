import { IsNotEmpty, IsUUID } from "class-validator";

export class LoansValidateRequiredLoanCreditorUniqueIdInterfaceInputDto {
  @IsUUID()
  @IsNotEmpty()
  public creditorUniqueId!: string;
}
