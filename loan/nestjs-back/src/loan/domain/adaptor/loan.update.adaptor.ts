import { LoanUpdateAdaptorInputDto } from "../../inbound/dtos/loan.update.adaptor.input.dto";
import { LoanUpdateAdaptorOutputDto } from "../../outbound/dtos/loan.update.adaptor.output.dto";

export interface LoanUpdateAdaptor {
  readonly update: (
    dto: LoanUpdateAdaptorInputDto
  ) => Promise<LoanUpdateAdaptorOutputDto>;
}
