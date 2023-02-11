import { UsersExistsPhoneAdaptor } from "../../domain/adaptor/users.exists.phone.adaptor";
import { UsersExistsPhoneAdaptorInputDto } from "../../inbound/dtos/users.exists.phone.input.dto";
import { UsersExistsPhoneAdaptorOutputDto } from "../../outbound/dtos/users.exists.output.phone.dto";
export declare class UsersExistsPhoneUseCase implements UsersExistsPhoneAdaptor {
    private readonly repository;
    constructor(repository: UsersExistsPhoneAdaptor);
    existsPhone(dto: UsersExistsPhoneAdaptorInputDto): Promise<UsersExistsPhoneAdaptorOutputDto>;
}
