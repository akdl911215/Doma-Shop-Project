import { UsersWithdrawalAdaptor } from "../../domain/adaptor/users.withdrawal.adaptor";
export declare class UsersWithdrawalController {
    private readonly useCase;
    constructor(useCase: UsersWithdrawalAdaptor);
    private withdrawal;
}
