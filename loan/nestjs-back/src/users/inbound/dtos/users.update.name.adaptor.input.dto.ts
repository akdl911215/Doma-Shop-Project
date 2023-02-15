import { PickType } from "@nestjs/swagger";
import { UsersModel } from "../../domain/entity/users.model";

export class UsersUpdateNameAdaptorInputDto extends PickType(UsersModel, [
  "name",
] as const) {}
