import { UsersRegisterAdaptorInputDto } from "../../inbound/dtos/users.register.adaptor.input.dto";
import { UsersRegisterAdaptorOutputDto } from "../../outbound/dtos/users.register.adaptor.output.dto";

export interface UsersRegisterAdaptor {
  readonly register: (dto: UsersRegisterAdaptorInputDto) =>
    Promise<UsersRegisterAdaptorOutputDto>;
}