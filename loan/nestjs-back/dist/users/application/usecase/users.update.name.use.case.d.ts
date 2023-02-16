import { UsersUpdateNameAdaptor } from "../../domain/adaptor/users.update.name.adaptor";
import { UsersUpdateNameAdaptorInputDto } from "../../inbound/dtos/users.update.name.adaptor.input.dto";
import { UsersUpdateNameAdaptorOutputDto } from "../../outbound/dtos/users.update.name.adaptor.output.dto";
export declare class UsersUpdateNameUseCase implements UsersUpdateNameAdaptor {
    private readonly repository;
    constructor(repository: UsersUpdateNameAdaptor);
    updateName(dto: UsersUpdateNameAdaptorInputDto): Promise<UsersUpdateNameAdaptorOutputDto>;
}
