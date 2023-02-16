import { UsersModel } from "../../domain/entity/users.model";
declare const UsersUpdateNameAdaptorInputDto_base: import("@nestjs/common").Type<Pick<UsersModel, "name">>;
export declare class UsersUpdateNameAdaptorInputDto extends UsersUpdateNameAdaptorInputDto_base {
    id: string;
}
export {};
