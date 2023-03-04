import { LoansCreateAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.create.adaptor.output.dto";
import { LoansCreateAdaptor } from "../../domain/adaptor/loans.create.adaptor";
import { LoansCreateAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.create.adaptor.input.dto";
export declare class LoansCreateUseCase implements LoansCreateAdaptor {
    private readonly repository;
    constructor(repository: LoansCreateAdaptor);
    create(dto: LoansCreateAdaptorInputDto): Promise<LoansCreateAdaptorOutputDto>;
}
