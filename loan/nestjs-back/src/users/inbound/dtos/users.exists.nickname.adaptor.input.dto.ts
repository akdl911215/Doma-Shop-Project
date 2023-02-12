import { PickType } from "@nestjs/swagger";
import { UsersModel } from "../../domain/entity/users.model";

export class UsersExistsNicknameAdaptorInputDto extends PickType(UsersModel, [
  "nickname",
] as const) {}
