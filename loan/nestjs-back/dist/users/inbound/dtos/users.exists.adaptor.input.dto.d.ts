import { UsersModel } from "../../domain/entity/users.model";
declare const UsersExistsAdaptorInputDto_base: import("@nestjs/common").Type<Pick<UsersModel, "userId" | "nickname" | "phone">>;
export declare class UsersExistsAdaptorInputDto extends UsersExistsAdaptorInputDto_base {
}
export {};
