import { LoanUpdateAdaptor } from "../../domain/adaptor/loan.update.adaptor";
import { LoanUpdateAdaptorOutputDto } from "../../outbound/dtos/loan.update.adaptor.output.dto";
import { LoanUpdateAdaptorInputDto } from "../../inbound/dtos/loan.update.adaptor.input.dto";
export declare class LoanUpdateUseCase implements LoanUpdateAdaptor {
    private readonly repository;
    constructor(repository: LoanUpdateAdaptor);
    update(dto: LoanUpdateAdaptorInputDto): Promise<LoanUpdateAdaptorOutputDto>;
}
