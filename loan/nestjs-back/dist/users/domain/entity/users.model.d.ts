import { BaseCommonCoreDto } from "../../../_common/dtos/base.common.core.dto";
export declare class UsersModel extends BaseCommonCoreDto {
    userId: string;
    nickname: string;
    password: string;
    name: string;
    address: string;
    phone: string;
    refreshToken?: string;
    accessToken?: string;
    loanPayBack?: number[];
    loanReceived?: number[];
}
