import { LoansDeleteAdaptorOutputDto } from "../../outbound/dtos/adaptors/loans.delete.adaptor.output.dto";
import { LoansDeleteAdaptorInputDto } from "../../inbound/dtos/adaptors/loans.delete.adaptor.input.dto";

export interface LoansDeleteAdaptor {
  readonly delete: (
    dto: LoansDeleteAdaptorInputDto
  ) => Promise<LoansDeleteAdaptorOutputDto>;
}
