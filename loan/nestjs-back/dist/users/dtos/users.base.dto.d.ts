import { CommonCoreDto } from "../../common/dtos/base.common.dto";
declare enum SosialType {
    KAKAO = 0,
    NAVER = 1,
    BASIC = 2
}
export declare class UsersBaseDto extends CommonCoreDto {
    noteId: string;
    password: string;
    name: string;
    address: string;
    phone: string;
    isMarketing: boolean;
    social: SosialType | string;
    refreshToken?: string;
    accessToken?: string;
}
export {};
