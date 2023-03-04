import { LoansCreateAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.create.adaptor.output.dto";
import { LoansCreateAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.create.adaptor.input.dto";
export interface LoansCreateAdaptor {
    readonly create: (dto: LoansCreateAdaptorInputDto) => Promise<LoansCreateAdaptorOutputDto>;
}
