import { UsersUpdateAdaptor } from "../../domain/adaptor/users.update.adaptor";
import { UsersUpdateAdaptorInputDto } from "../../inbound/dtos/users.update.adaptor.input.dto";
import { UsersUpdateAdaptorOutputDto } from "../../outbound/dtos/users.update.adaptor.output.dto";
export declare class UsersUpdateUseCase implements UsersUpdateAdaptor {
    private readonly repository;
    constructor(repository: UsersUpdateAdaptor);
    update(dto: UsersUpdateAdaptorInputDto): Promise<UsersUpdateAdaptorOutputDto>;
}
