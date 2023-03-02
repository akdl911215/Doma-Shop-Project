import { PickType } from "@nestjs/swagger";
import { LoansModel } from "../../domain/entity/loans.model";

export class LoansValidateRequiredLoanCreditorUniqueIdAdaptorInputDto extends PickType(
  LoansModel,
  ["creditorUniqueId"] as const
) {}
