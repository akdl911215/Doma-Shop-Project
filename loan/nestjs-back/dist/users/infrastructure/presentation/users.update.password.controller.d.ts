import { UsersUpdatePasswordAdaptor } from "../../domain/adaptor/users.update.password.adaptor";
export declare class UsersUpdatePasswordController {
    private readonly useCase;
    constructor(useCase: UsersUpdatePasswordAdaptor);
    private updatePassword;
}
