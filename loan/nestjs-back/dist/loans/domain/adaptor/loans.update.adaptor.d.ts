import { LoansUpdateAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.update.adaptor.output.dto";
import { LoansUpdateAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.update.adaptor.input.dto";
export interface LoansUpdateAdaptor {
    readonly update: (dto: LoansUpdateAdaptorInputDto) => Promise<LoansUpdateAdaptorOutputDto>;
}
