import { UsersInterface } from "./interfaces/users.interface";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersInterface);
    private register;
    private login;
    private findOn;
    private delete;
    private update;
    private me;
    private refreshMe;
}
