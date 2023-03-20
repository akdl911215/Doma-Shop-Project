import { CreditorsDeleteAdaptorInputDto } from "../../inbound/dtos/adaptors/creditors.delete.adaptor.input.dto";
import { CreditorsDeleteAdaptorOutputDto } from "../../outbound/dtos/adaptors/creditors.delete.adaptor.output.dto";

export interface CreditorsDeleteAdaptor {
  readonly delete: (
    dto: CreditorsDeleteAdaptorInputDto
  ) => Promise<CreditorsDeleteAdaptorOutputDto>;
}
