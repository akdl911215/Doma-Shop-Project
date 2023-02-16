import { UsersUpdateAddressAdaptor } from "../../domain/adaptor/users.update.address.adaptor";
import { UsersUpdateAddressAdaptorInputDto } from "../../inbound/dtos/users.update.address.adaptor.input.dto";
import { UsersUpdateAddressAdaptorOutputDto } from "../../outbound/dtos/users.update.address.adaptor.output.dto";
export declare class UsersUpdateAddressUseCase implements UsersUpdateAddressAdaptor {
    private readonly repository;
    constructor(repository: UsersUpdateAddressAdaptor);
    updateAddress(dto: UsersUpdateAddressAdaptorInputDto): Promise<UsersUpdateAddressAdaptorOutputDto>;
}
