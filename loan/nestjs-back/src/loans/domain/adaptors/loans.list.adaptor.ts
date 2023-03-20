import { LoansListAdaptorOutputDto } from "../../outbound/dtos/adaptors/loans.list.adaptor.output.dto";
import { LoansListAdaptorInputDto } from "../../inbound/dtos/adaptors/loans.list.adaptor.input.dto";

export interface LoansListAdaptor {
  readonly list: (
    dto: LoansListAdaptorInputDto
  ) => Promise<LoansListAdaptorOutputDto>;
}
