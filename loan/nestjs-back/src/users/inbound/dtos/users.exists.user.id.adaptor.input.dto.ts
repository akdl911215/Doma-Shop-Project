import { PickType } from "@nestjs/swagger";
import { UsersModel } from "../../domain/entity/users.model";

export class UsersExistsUserIdAdaptorInputDto extends PickType(UsersModel, [
  "userId",
] as const) {}
