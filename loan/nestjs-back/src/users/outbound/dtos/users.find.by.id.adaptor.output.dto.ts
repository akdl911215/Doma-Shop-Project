import { UsersModel } from "../../domain/entity/users.model";
import { BaseOutputDto } from "../../../common/dtos/base.output.dto";

export class UsersFindByIdAdaptorOutputDto extends BaseOutputDto<UsersModel> {}
