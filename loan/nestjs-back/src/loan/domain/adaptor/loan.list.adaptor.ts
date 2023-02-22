import { LoanListAdaptorInputDto } from "../../inbound/dtos/loan.list.adaptor.input.dto";
import { LoanListAdaptorOutputDto } from "../../outbound/dtos/loan.list.adaptor.output.dto";

export interface LoanListAdaptor {
  readonly list: (
    dto: LoanListAdaptorInputDto
  ) => Promise<LoanListAdaptorOutputDto>;
}
