import { PickType } from "@nestjs/swagger";
import { LoansModel } from "../../../domain/entity/loans.model";

export class LoansExistsLoanCreditorUniqueIdInterfaceInputDto extends PickType(
  LoansModel,
  ["creditorUniqueId"] as const
) {}
