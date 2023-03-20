import { UsersDeleteAdaptorInputDto } from "../../inbound/dtos/users.delete.adaptor.input.dto";
import { UsersDeleteAdaptorOutputDto } from "../../outbound/dtos/users.delete.adaptor.output.dto";

export interface UsersDeleteAdaptor {
  delete: (
    dto: UsersDeleteAdaptorInputDto
  ) => Promise<UsersDeleteAdaptorOutputDto>;
}
