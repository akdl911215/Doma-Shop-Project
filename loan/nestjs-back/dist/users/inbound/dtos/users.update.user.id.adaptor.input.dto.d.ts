import { UsersModel } from "../../domain/entity/users.model";
declare const UsersUpdateUserIdAdaptorInputDto_base: import("@nestjs/common").Type<Pick<UsersModel, "userId">>;
export declare class UsersUpdateUserIdAdaptorInputDto extends UsersUpdateUserIdAdaptorInputDto_base {
    id: string;
}
export {};
