import { UsersModel } from "../../domain/entity/users.model";
declare const UsersRegisterAdaptorInputDto_base: import("@nestjs/common").Type<Pick<UsersModel, "userId" | "name" | "nickname" | "password" | "address" | "phone">>;
export declare class UsersRegisterAdaptorInputDto extends UsersRegisterAdaptorInputDto_base {
    confirmPassword: string;
}
export {};
