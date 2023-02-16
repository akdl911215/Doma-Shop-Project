import { UsersUpdatePhoneAdaptor } from "../../domain/adaptor/users.update.phone.adaptor";
import { UsersUpdatePhoneAdaptorInputDto } from "../../inbound/dtos/users.update.phone.adaptor.input.dto";
import { UsersUpdatePhoneAdaptorOutputDto } from "../../outbound/dtos/users.update.phone.adaptor.output.dto";
export declare class UsersUpdatePhoneUseCase implements UsersUpdatePhoneAdaptor {
    private readonly repository;
    constructor(repository: UsersUpdatePhoneAdaptor);
    updatePhone(dto: UsersUpdatePhoneAdaptorInputDto): Promise<UsersUpdatePhoneAdaptorOutputDto>;
}
