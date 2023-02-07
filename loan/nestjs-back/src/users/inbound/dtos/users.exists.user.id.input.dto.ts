import { PickType } from "@nestjs/swagger";
import { UsersModel } from "../../domain/entity/users.model";

export class UsersExistsUserIdInputDto extends PickType(UsersModel, [
  "userId",
] as const) {}
