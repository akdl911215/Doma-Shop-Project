import { LoansUpdateAdaptorOutputDto } from "../../outbound/dtos/loans.update.adaptor.output.dto";
import { LoansUpdateAdaptor } from "../../domain/adaptor/loans.update.adaptor";
import { LoansUpdateAdaptorInputDto } from "../../inbound/dtos/loans.update.adaptor.input.dto";
export declare class LoansUpdateUseCase implements LoansUpdateAdaptor {
    private readonly repository;
    constructor(repository: LoansUpdateAdaptor);
    update(dto: LoansUpdateAdaptorInputDto): Promise<LoansUpdateAdaptorOutputDto>;
}
