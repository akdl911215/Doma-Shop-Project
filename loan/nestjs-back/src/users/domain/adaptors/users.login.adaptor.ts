import { UsersLoginAdaptorInputDto } from "../../inbound/dtos/users.login.adaptor.input.dto";
import { UsersLoginAdaptorOutputDto } from "../../outbound/dtos/users.login.adaptor.output.dto";

export interface UsersLoginAdaptor {
  readonly login: (dto: UsersLoginAdaptorInputDto) =>
    Promise<UsersLoginAdaptorOutputDto>
}