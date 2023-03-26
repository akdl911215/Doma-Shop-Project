import { IsUUID } from "class-validator";

export class UsersExistsUniqueIdInterfaceInputDto {
  @IsUUID()
  public id!: string;
}
