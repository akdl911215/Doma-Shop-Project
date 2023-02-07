import { PickType } from "@nestjs/swagger";
import { UsersModel } from "../../domain/entity/users.model";

export class UsersExistsNicknameInputDto extends PickType(UsersModel, [
  "nickname",
] as const) {}
