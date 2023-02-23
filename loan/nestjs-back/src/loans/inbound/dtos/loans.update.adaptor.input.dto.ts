import { PartialType } from "@nestjs/swagger";
import { LoansModel } from "../../domain/entity/loans.model";

export class LoansUpdateAdaptorInputDto extends PartialType(LoansModel) {}
