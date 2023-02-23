import { LoansCreateAdaptorOutputDto } from "../../outbound/dtos/loans.create.adaptor.output.dto";
import { LoansCreateAdaptorInputDto } from "../../inbound/dtos/loans.create.adaptor.input.dto";

export interface LoansCreateAdaptor {
  readonly create: (
    dto: LoansCreateAdaptorInputDto
  ) => Promise<LoansCreateAdaptorOutputDto>;
}
