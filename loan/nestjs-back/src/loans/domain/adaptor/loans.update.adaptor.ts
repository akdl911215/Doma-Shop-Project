import { LoansUpdateAdaptorOutputDto } from "../../outbound/dtos/loans.update.adaptor.output.dto";
import { LoansUpdateAdaptorInputDto } from "../../inbound/dtos/loans.update.adaptor.input.dto";

export interface LoansUpdateAdaptor {
  readonly update: (
    dto: LoansUpdateAdaptorInputDto
  ) => Promise<LoansUpdateAdaptorOutputDto>;
}
