import { LoansListAdaptorOutputDto } from "../../outbound/dtos/loans.list.adaptor.output.dto";
import { LoansListAdaptorInputDto } from "../../inbound/dtos/loans.list.adaptor.input.dto";
export interface LoansListAdaptor {
    readonly list: (dto: LoansListAdaptorInputDto) => Promise<LoansListAdaptorOutputDto>;
}
