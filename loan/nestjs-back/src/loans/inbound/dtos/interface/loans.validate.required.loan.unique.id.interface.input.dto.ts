import { PickType } from "@nestjs/swagger";
import { LoansModel } from "../../../domain/entity/loans.model";

export class LoansValidateRequiredLoanUniqueIdInterfaceInputDto extends PickType(
  LoansModel,
  ["creditorUniqueId"] as const
) {}
