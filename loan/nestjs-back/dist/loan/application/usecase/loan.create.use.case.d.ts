import { LoanCreateAdaptor } from "../../domain/adaptor/loan.create.adaptor";
import { LoanCreateAdaptorInputDto } from "../../inbound/dtos/loan.create.adaptor.input.dto";
import { LoanCreateAdaptorOutputDto } from "../../outbound/dtos/loan.create.adaptor.output.dto";
export declare class LoanListUseCase implements LoanCreateAdaptor {
    private readonly repository;
    constructor(repository: LoanCreateAdaptor);
    create(dto: LoanCreateAdaptorInputDto): Promise<LoanCreateAdaptorOutputDto>;
}
