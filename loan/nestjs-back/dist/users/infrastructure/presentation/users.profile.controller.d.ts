import { UsersProfileAdaptor } from "../../domain/adaptor/users.profile.adaptor";
export declare class UsersProfileController {
    private readonly useCase;
    constructor(useCase: UsersProfileAdaptor);
    private profile;
}
