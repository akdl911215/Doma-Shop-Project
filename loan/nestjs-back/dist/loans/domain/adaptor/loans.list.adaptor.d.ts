import { LoansListAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.list.adaptor.output.dto";
import { LoansListAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.list.adaptor.input.dto";
export interface LoansListAdaptor {
    readonly list: (dto: LoansListAdaptorInputDto) => Promise<LoansListAdaptorOutputDto>;
}
