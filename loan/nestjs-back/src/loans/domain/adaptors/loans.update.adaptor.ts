import { LoansUpdateAdaptorOutputDto } from "../../outbound/dtos/adaptors/loans.update.adaptor.output.dto";
import { LoansUpdateAdaptorInputDto } from "../../inbound/dtos/adaptors/loans.update.adaptor.input.dto";

export interface LoansUpdateAdaptor {
  readonly update: (
    dto: LoansUpdateAdaptorInputDto
  ) => Promise<LoansUpdateAdaptorOutputDto>;
}
