import { PickType } from "@nestjs/swagger";
import { UsersModel } from "../../domain/entity/users.model";

export class UsersExistsPhoneAdaptorInputDto extends PickType(UsersModel, [
  "phone",
] as const) {}
