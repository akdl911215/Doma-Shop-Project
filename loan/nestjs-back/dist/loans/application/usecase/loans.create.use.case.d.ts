import { LoansCreateAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.create.adaptor.output.dto";
import { LoansCreateAdaptor } from "../../domain/adaptor/loans.create.adaptor";
import { LoansCreateAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.create.adaptor.input.dto";
import { UsersExistsUserInterface } from "../../domain/interface/users.exists.user.interface";
export declare class LoansCreateUseCase implements LoansCreateAdaptor {
    private readonly repository;
    private readonly compareExistsDBUserWith;
    constructor(repository: LoansCreateAdaptor, compareExistsDBUserWith: UsersExistsUserInterface);
    create(dto: LoansCreateAdaptorInputDto): Promise<LoansCreateAdaptorOutputDto>;
}
