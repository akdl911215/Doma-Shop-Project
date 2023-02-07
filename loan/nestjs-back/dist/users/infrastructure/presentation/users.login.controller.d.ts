import { UsersLoginAdaptor } from "../../domain/adaptor/users.login.adaptor";
export declare class UsersLoginController {
    private readonly useCase;
    constructor(useCase: UsersLoginAdaptor);
    private login;
}
