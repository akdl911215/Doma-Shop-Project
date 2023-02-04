import { BaseOutputDto } from "../../../common/dtos/base.output.dto";
import { UsersBaseDto } from "../../domain/entity/users.base.dto";

export class UsersLoginAdaptorOutputDto extends BaseOutputDto<
  UsersBaseDto & { readonly accessToken: string; readonly refreshToken: string }
  > {}