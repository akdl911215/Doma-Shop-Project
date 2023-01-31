import { BaseOutputDto } from "../../common/dtos/base.output.dto";
export declare class MainBoardsDeleteInput {
    id: number;
}
export declare class MainBoardsDeleteOutput extends BaseOutputDto<{
    readonly delete: boolean;
}> {
}
