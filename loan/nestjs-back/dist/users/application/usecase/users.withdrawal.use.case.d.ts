import { UsersWithdrawalAdaptor } from "../../domain/adaptor/users.withdrawal.adaptor";
import { UsersWithdrawalAdaptorInputDto } from "../../inbound/dtos/users.withdrawal.adaptor.input.dto";
import { UsersWithdrawalAdaptorOutputDto } from "../../outbound/dtos/users.withdrawal.adaptor.output.dto";
export declare class UsersWithdrawalUseCase implements UsersWithdrawalAdaptor {
    private readonly repository;
    constructor(repository: UsersWithdrawalAdaptor);
    withdrawal(dto: UsersWithdrawalAdaptorInputDto): Promise<UsersWithdrawalAdaptorOutputDto>;
}
