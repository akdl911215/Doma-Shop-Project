import { BaseOutputDto } from "../../../common/dtos/base.output.dto";
export declare class LoanListAdaptorOutputDto extends BaseOutputDto<{
    readonly resultPage: number;
    readonly resultTotalPage: number;
    readonly currentList: [];
}> {
}
