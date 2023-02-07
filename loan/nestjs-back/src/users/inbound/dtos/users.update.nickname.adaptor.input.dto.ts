import { PickType } from "@nestjs/swagger";
import { UsersModel } from "../../domain/entity/users.model";

export class UsersUpdateNicknameAdaptorInputDto extends PickType(UsersModel, [
  "nickname",
] as const) {}
