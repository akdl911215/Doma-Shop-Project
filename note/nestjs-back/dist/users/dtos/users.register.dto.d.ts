import { UsersBaseDto } from "./users.base.dto";
import { BaseOutputDto } from "../../common/dtos/base.output.dto";
declare const RegisterInputUser_base: import("@nestjs/common").Type<Pick<UsersBaseDto, "noteId" | "password" | "name" | "address" | "phone" | "social">>;
export declare class RegisterInputUser extends RegisterInputUser_base {
    confirmPassword: string;
}
export declare class RegisterOutputUser extends BaseOutputDto<UsersBaseDto> {
}
export {};
