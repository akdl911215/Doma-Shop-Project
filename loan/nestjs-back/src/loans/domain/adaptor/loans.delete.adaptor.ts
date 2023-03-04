import { LoansDeleteAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.delete.adaptor.output.dto";
import { LoansDeleteAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.delete.adaptor.input.dto";

export interface LoansDeleteAdaptor {
  readonly delete: (
    dto: LoansDeleteAdaptorInputDto
  ) => Promise<LoansDeleteAdaptorOutputDto>;
}
