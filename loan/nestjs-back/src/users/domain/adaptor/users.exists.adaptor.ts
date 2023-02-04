import { UsersExistsAdaptorInputDto } from "../../inbound/dtos/users.exists.adaptor.input.dto";

export interface UsersExistsAdaptor {
  readonly exists: (
    dto: UsersExistsAdaptorInputDto,
  ) => Promise<UsersExistsAdaptorOutputDto>;
}
