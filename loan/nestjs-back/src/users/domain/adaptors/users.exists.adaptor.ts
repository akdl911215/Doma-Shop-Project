import { UsersExistsAdaptorInputDto } from "../../inbound/dtos/users.exists.adaptor.input.dto";
import { UsersExistsAdaptorOutputDto } from "../../outbound/dtos/users.exits.adaptor.output.dto";

export interface UsersExistsAdaptor {
  readonly exists: (
    dto: UsersExistsAdaptorInputDto
  ) => Promise<UsersExistsAdaptorOutputDto>;
}
