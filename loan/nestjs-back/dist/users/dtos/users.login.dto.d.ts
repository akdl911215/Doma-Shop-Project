import { UsersBaseDto } from './users.base.dto';
import { BaseOutputDto } from '../../common/dtos/base.output.dto';
declare const LoginInputUser_base: import("@nestjs/common").Type<Pick<UsersBaseDto, "noteId" | "password">>;
export declare class LoginInputUser extends LoginInputUser_base {
}
export declare class LoginOutputUser extends BaseOutputDto<UsersBaseDto & {
    readonly accessToken: string;
    readonly refreshToken: string;
}> {
}
export {};
