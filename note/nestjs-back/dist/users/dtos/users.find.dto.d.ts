import { BaseOutputDto } from "../../common/dtos/base.output.dto";
import { UsersBaseDto } from "./users.base.dto";
export declare class FindInputUser {
    id: number;
}
export declare class FindOutputUser extends BaseOutputDto<UsersBaseDto> {
}
