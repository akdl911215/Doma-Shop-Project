import { UsersExistsUserIdAdaptor } from "../../domain/adaptor/users.exists.user.id.adaptor";
import { UsersExistsUserIdAdaptorInputDto } from "../../inbound/dtos/users.exists.user.id.adaptor.input.dto";
import { UsersExistsUserIdAdaptorOutputDto } from "../../outbound/dtos/users.exists.user.id.adaptor.output.dto";
export declare class UsersExistsUserIdUseCase implements UsersExistsUserIdAdaptor {
    private readonly repository;
    constructor(repository: UsersExistsUserIdAdaptor);
    existsUserId(dto: UsersExistsUserIdAdaptorInputDto): Promise<UsersExistsUserIdAdaptorOutputDto>;
}
