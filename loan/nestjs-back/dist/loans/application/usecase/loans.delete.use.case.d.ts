import { LoansDeleteAdaptorOutputDto } from "../../outbound/dtos/loans.delete.adaptor.output.dto";
import { LoansDeleteAdaptor } from "../../domain/adaptor/loans.delete.adaptor";
import { LoansDeleteAdaptorInputDto } from "../../inbound/dtos/loans.delete.adaptor.input.dto";
export declare class LoansDeleteUseCase implements LoansDeleteAdaptor {
    private readonly repository;
    constructor(repository: LoansDeleteAdaptor);
    delete(dto: LoansDeleteAdaptorInputDto): Promise<LoansDeleteAdaptorOutputDto>;
}
