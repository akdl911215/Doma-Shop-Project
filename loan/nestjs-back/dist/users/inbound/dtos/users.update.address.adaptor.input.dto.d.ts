import { UsersModel } from "../../domain/entity/users.model";
declare const UsersUpdateAddressAdaptorInputDto_base: import("@nestjs/common").Type<Pick<UsersModel, "address">>;
export declare class UsersUpdateAddressAdaptorInputDto extends UsersUpdateAddressAdaptorInputDto_base {
    id: string;
}
export {};
