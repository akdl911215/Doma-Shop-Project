import { PickType } from "@nestjs/swagger";
import { UsersModel } from "../../../../users/domain/entity/users.model";

export class UsersExistsUserIdInterfaceInputDto extends PickType(UsersModel, [
  "userId",
] as const) {}
