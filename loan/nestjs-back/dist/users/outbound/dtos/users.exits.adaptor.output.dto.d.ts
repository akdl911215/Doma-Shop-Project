import { BaseOutputDto } from "../../../common/dtos/base.output.dto";
export declare class UsersExistsAdaptorOutputDto extends BaseOutputDto<{
    readonly accountId: string;
    readonly phone: string;
    readonly nickname: string;
}> {
}
