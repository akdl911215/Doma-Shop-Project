import { PickType } from "@nestjs/swagger";
import { UsersModel } from "../../../../users/domain/entity/users.model";

export class UsersExistsUserInterfaceInputDto extends PickType(UsersModel, [
  "userId",
] as const) {
  public id!: string;
}
