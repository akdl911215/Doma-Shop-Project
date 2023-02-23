import { LoanListAdaptor } from "../../domain/adaptor/loan.list.adaptor";
import { LoanListAdaptorInputDto } from "../../inbound/dtos/loan.list.adaptor.input.dto";
import { LoanListAdaptorOutputDto } from "../../outbound/dtos/loan.list.adaptor.output.dto";
export declare class LoanListUseCase implements LoanListAdaptor {
    private readonly repository;
    constructor(repository: LoanListAdaptor);
    list(dto: LoanListAdaptorInputDto): Promise<LoanListAdaptorOutputDto>;
}
