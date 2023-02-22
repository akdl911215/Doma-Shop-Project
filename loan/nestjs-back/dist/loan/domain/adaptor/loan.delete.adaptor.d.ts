import { LoanDeleteAdaptorInputDto } from "../../inbound/dtos/loan.delete.adaptor.input.dto";
import { LoanDeleteAdaptorOutputDto } from "../../outbound/dtos/loan.delete.adaptor.output.dto";
export interface LoanDeleteAdaptor {
    readonly delete: (dto: LoanDeleteAdaptorInputDto) => Promise<LoanDeleteAdaptorOutputDto>;
}
