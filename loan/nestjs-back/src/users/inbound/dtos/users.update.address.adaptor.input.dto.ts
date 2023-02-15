import { PickType } from "@nestjs/swagger";
import { UsersModel } from "../../domain/entity/users.model";

export class UsersUpdateAddressAdaptorInputDto extends PickType(UsersModel, [
  "address",
] as const) {}
