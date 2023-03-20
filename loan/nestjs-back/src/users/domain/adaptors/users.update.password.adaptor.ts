import { UsersUpdatePasswordAdaptorInputDto } from "../../inbound/dtos/users.update.password.adaptor.input.dto";
import { UsersUpdatePasswordAdaptorOutputDto } from "../../outbound/dtos/users.update.password.adaptor.output.dto";

export interface UsersUpdatePasswordAdaptor {
  readonly updatePassword: (
    dto: UsersUpdatePasswordAdaptorInputDto
  ) => Promise<UsersUpdatePasswordAdaptorOutputDto>;
}
