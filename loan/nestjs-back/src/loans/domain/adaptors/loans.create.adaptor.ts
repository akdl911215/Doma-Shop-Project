import { LoansCreateAdaptorOutputDto } from "../../outbound/dtos/adaptors/loans.create.adaptor.output.dto";
import { LoansCreateAdaptorInputDto } from "../../inbound/dtos/adaptors/loans.create.adaptor.input.dto";

export interface LoansCreateAdaptor {
  readonly create: (
    dto: LoansCreateAdaptorInputDto
  ) => Promise<LoansCreateAdaptorOutputDto>;
}
