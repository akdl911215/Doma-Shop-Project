import { BaseCommonCoreDto } from "../../../common/dtos/base.common.core.dto";
declare enum SosialType {
    KAKAO = 0,
    NAVER = 1,
    BASIC = 2
}
export declare class UsersModel extends BaseCommonCoreDto {
    userId: string;
    password: string;
    name: string;
    address: string;
    phone: string;
    isMarketing: boolean;
    social: SosialType | string;
    refreshToken?: string;
    accessToken?: string;
    loanPayBack: number[];
    loanReceived: number[];
}
export {};
