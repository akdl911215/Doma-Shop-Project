import { UsersModel } from "../../domain/entity/users.model";
import { PickType } from "@nestjs/swagger";

export class UsersExistsAdaptorInputDto extends PickType(UsersModel, [
  'userId', 'phone', 'nickname'
] as const) {}
