import { UsersModel } from "../../domain/entity/users.model";
declare const UsersUpdateNicknameAdaptorInputDto_base: import("@nestjs/common").Type<Pick<UsersModel, "nickname">>;
export declare class UsersUpdateNicknameAdaptorInputDto extends UsersUpdateNicknameAdaptorInputDto_base {
    id: string;
}
export {};
