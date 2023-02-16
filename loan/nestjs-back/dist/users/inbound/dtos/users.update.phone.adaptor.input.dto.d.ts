import { UsersModel } from "../../domain/entity/users.model";
declare const UsersUpdatePhoneAdaptorInputDto_base: import("@nestjs/common").Type<Pick<UsersModel, "phone">>;
export declare class UsersUpdatePhoneAdaptorInputDto extends UsersUpdatePhoneAdaptorInputDto_base {
    id: string;
}
export {};
