import { CreditorsCreateAdaptorInputDto } from "../../inbound/dtos/adaptors/creditors.create.adaptor.input.dto";
import { CreditorsCreateAdaptorOutputDto } from "../../outbound/dtos/adaptors/creditors.create.adaptor.output.dto";

export interface CreditorsCreateAdaptor {
  readonly create: (
    dto: CreditorsCreateAdaptorInputDto
  ) => Promise<CreditorsCreateAdaptorOutputDto>;
}
