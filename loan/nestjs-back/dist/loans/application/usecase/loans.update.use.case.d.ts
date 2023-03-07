import { LoansUpdateAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.update.adaptor.output.dto";
import { LoansUpdateAdaptor } from "../../domain/adaptor/loans.update.adaptor";
import { LoansUpdateAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.update.adaptor.input.dto";
import { LoansExistsLoanUniqueIdInterface } from "../../domain/interface/loans.exists.loan.unique.id.interface";
import { LoansSearchByUniqueIdInterface } from "../../domain/interface/loans.search.by.unique.id.interface";
export declare class LoansUpdateUseCase implements LoansUpdateAdaptor {
    private readonly repository;
    private readonly existsDBLoanWith;
    private readonly searchDBUniqueIdWith;
    constructor(repository: LoansUpdateAdaptor, existsDBLoanWith: LoansExistsLoanUniqueIdInterface, searchDBUniqueIdWith: LoansSearchByUniqueIdInterface);
    update(dto: LoansUpdateAdaptorInputDto): Promise<LoansUpdateAdaptorOutputDto>;
}
