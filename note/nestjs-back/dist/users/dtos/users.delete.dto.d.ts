import { BaseOutputDto } from '../../common/dtos/base.output.dto';
export declare class DeleteInputUser {
    id: number;
}
export declare class DeleteOutputUser extends BaseOutputDto<{
    readonly delete: boolean;
}> {
}
