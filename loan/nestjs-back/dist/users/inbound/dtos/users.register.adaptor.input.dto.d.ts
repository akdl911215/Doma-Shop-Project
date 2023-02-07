import { UsersModel } from "../../domain/entity/users.model";
declare const UsersRegisterAdaptorInputDto_base: import("@nestjs/common").Type<Pick<UsersModel, "name" | "phone" | "password" | "address" | "userId" | "social">>;
export declare class UsersRegisterAdaptorInputDto extends UsersRegisterAdaptorInputDto_base {
    confirmPassword: string;
}
export {};
