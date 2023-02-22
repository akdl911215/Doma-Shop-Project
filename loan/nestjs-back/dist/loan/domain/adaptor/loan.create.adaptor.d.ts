import { LoanCreateAdaptorInputDto } from "../../inbound/dtos/loan.create.adaptor.input.dto";
import { LoanCreateAdaptorOutputDto } from "../../outbound/dtos/loan.create.adaptor.output.dto";
export interface LoanCreateAdaptor {
    readonly create: (dto: LoanCreateAdaptorInputDto) => Promise<LoanCreateAdaptorOutputDto>;
}
