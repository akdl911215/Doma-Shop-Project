import { UsersBaseDto } from './users.base.dto';
import { BaseOutputDto } from '../../common/dtos/base.output.dto';
declare const UpdateInputUser_base: import("@nestjs/common").Type<Pick<UsersBaseDto, "name" | "password" | "address" | "phone">>;
export declare class UpdateInputUser extends UpdateInputUser_base {
}
export declare class UpdateOutputUser extends BaseOutputDto<UsersBaseDto> {
}
export {};
