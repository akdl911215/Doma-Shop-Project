import { UsersDeleteAdaptor } from "../../domain/adaptor/users.delete.adaptor";
import { UsersDeleteAdaptorInputDto } from "../../inbound/dtos/users.delete.adaptor.input.dto";
import { UsersDeleteAdaptorOutputDto } from "../../outbound/dtos/users.delete.adaptor.output.dto";
export declare class UsersDeleteUseCase implements UsersDeleteAdaptor {
    private readonly repository;
    constructor(repository: UsersDeleteAdaptor);
    delete(dto: UsersDeleteAdaptorInputDto): Promise<UsersDeleteAdaptorOutputDto>;
}
