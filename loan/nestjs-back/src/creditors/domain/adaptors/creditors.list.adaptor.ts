import { CreditorsListAdaptorInputDto } from "../../inbound/dtos/adaptors/creditors.list.adaptor.input.dto";
import { CreditorsListAdaptorOutputDto } from "../../outbound/dtos/adaptors/creditors.list.adaptor.output.dto";

export interface CreditorsListAdaptor {
  readonly list: (
    dto: CreditorsListAdaptorInputDto
  ) => Promise<CreditorsListAdaptorOutputDto>;
}
