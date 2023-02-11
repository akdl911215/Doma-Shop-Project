import { UsersExistsPhoneAdaptorInputDto } from "../../inbound/dtos/users.exists.phone.input.dto";
import { UsersExistsPhoneAdaptorOutputDto } from "../../outbound/dtos/users.exists.output.phone.dto";
export interface UsersExistsPhoneAdaptor {
    readonly existsPhone: (dto: UsersExistsPhoneAdaptorInputDto) => Promise<UsersExistsPhoneAdaptorOutputDto>;
}
