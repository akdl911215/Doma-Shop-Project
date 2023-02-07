import { UsersModel } from "../../domain/entity/users.model";
declare const UsersUpdateAdaptorInputDto_base: import("@nestjs/common").Type<Pick<UsersModel, "password" | "name" | "address" | "phone">>;
export declare class UsersUpdateAdaptorInputDto extends UsersUpdateAdaptorInputDto_base {
    confirmPassword: string;
}
export {};
