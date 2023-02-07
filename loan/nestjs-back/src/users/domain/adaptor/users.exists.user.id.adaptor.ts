import { UsersExistsUserIdInputDto } from "../../inbound/dtos/users.exists.user.id.input.dto";
import { UsersExistsUserIdOutputDto } from "../../outbound/dtos/users.exists.user.id.output.dto";

export interface UsersExistsUserIdAdaptor {
  readonly existsUserId: (
    dto: UsersExistsUserIdInputDto
  ) => Promise<UsersExistsUserIdOutputDto>;
}
