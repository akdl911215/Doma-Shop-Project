import { UsersUpdateAddressAdaptorInputDto } from "../../inbound/dtos/users.update.address.adaptor.input.dto";
import { UsersUpdateAddressAdaptorOutputDto } from "../../outbound/dtos/users.update.address.adaptor.output.dto";

export interface UsersUpdateAddressAdaptor {
  readonly updateAddress: (
    dto: UsersUpdateAddressAdaptorInputDto
  ) => Promise<UsersUpdateAddressAdaptorOutputDto>;
}
