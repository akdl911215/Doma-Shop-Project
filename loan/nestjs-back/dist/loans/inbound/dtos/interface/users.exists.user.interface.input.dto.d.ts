import { UsersModel } from "../../../../users/domain/entity/users.model";
declare const UsersExistsUserInterfaceInputDto_base: import("@nestjs/common").Type<Pick<UsersModel, "userId">>;
export declare class UsersExistsUserInterfaceInputDto extends UsersExistsUserInterfaceInputDto_base {
    id: string;
}
export {};
