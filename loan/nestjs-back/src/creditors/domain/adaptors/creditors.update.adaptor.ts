import { CreditorsListAdaptorInputDto } from "../../inbound/dtos/adaptors/creditors.list.adaptor.input.dto";
import { CreditorsListAdaptorOutputDto } from "../../outbound/dtos/adaptors/creditors.list.adaptor.output.dto";

export interface CreditorsUpdateAdaptor {
  readonly update: (
    dto: CreditorsListAdaptorInputDto
  ) => Promise<CreditorsListAdaptorOutputDto>;
}
