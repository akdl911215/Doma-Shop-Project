import { LoanDeleteAdaptor } from "../../domain/adaptor/loan.delete.adaptor";
import { LoanDeleteAdaptorOutputDto } from "../../outbound/dtos/loan.delete.adaptor.output.dto";
import { LoanDeleteAdaptorInputDto } from "../../inbound/dtos/loan.delete.adaptor.input.dto";
export declare class LoanDeleteUseCase implements LoanDeleteAdaptor {
    private readonly repository;
    constructor(repository: LoanDeleteAdaptor);
    delete(dto: LoanDeleteAdaptorInputDto): Promise<LoanDeleteAdaptorOutputDto>;
}
