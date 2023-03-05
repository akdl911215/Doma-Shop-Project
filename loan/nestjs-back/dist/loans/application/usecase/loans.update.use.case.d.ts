import { LoansUpdateAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.update.adaptor.output.dto";
import { LoansUpdateAdaptor } from "../../domain/adaptor/loans.update.adaptor";
import { LoansUpdateAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.update.adaptor.input.dto";
import { LoansExistsLoanInterface } from "../../domain/interface/loans.exists.loan.interface";
export declare class LoansUpdateUseCase implements LoansUpdateAdaptor {
    private readonly repository;
    private readonly existsDbLoanWith;
    constructor(repository: LoansUpdateAdaptor, existsDbLoanWith: LoansExistsLoanInterface);
    update(dto: LoansUpdateAdaptorInputDto): Promise<LoansUpdateAdaptorOutputDto>;
}
