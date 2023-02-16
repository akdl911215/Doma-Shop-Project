import { UsersModel } from "../../domain/entity/users.model";
declare const UsersUpdatePasswordAdaptorInputDto_base: import("@nestjs/common").Type<Pick<UsersModel, "password">>;
export declare class UsersUpdatePasswordAdaptorInputDto extends UsersUpdatePasswordAdaptorInputDto_base {
    confirmPassword?: string;
    currentPassword?: string;
    id: string;
}
export {};
