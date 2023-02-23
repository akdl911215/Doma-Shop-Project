import { LoansDeleteAdaptorOutputDto } from "../../outbound/dtos/loans.delete.adaptor.output.dto";
import { LoansDeleteAdaptorInputDto } from "../../inbound/dtos/loans.delete.adaptor.input.dto";

export interface LoansDeleteAdaptor {
  readonly delete: (
    dto: LoansDeleteAdaptorInputDto
  ) => Promise<LoansDeleteAdaptorOutputDto>;
}
