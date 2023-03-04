import { LoansListAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.list.adaptor.output.dto";
import { LoansListAdaptor } from "../../domain/adaptor/loans.list.adaptor";
import { LoansListAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.list.adaptor.input.dto";
export declare class LoansListUseCase implements LoansListAdaptor {
    private readonly repository;
    constructor(repository: LoansListAdaptor);
    list(dto: LoansListAdaptorInputDto): Promise<LoansListAdaptorOutputDto>;
}
