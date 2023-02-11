import { UsersModel } from "../entity/users.model";
import { UsersUpdatePhoneAdaptorInputDto } from "../../inbound/dtos/users.update.phone.adaptor.input.dto";
import { UsersUpdatePhoneAdaptorOutputDto } from "../../outbound/dtos/users.update.phone.adaptor.output.dto";
export interface UsersUpdatePhoneAdaptor {
    readonly updatePhone: (dto: {
        requestPhone: UsersUpdatePhoneAdaptorInputDto;
        user: UsersModel;
    }) => Promise<UsersUpdatePhoneAdaptorOutputDto>;
}
