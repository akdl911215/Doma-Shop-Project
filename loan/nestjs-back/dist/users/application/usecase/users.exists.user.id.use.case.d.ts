import { UsersExistsUserIdAdaptor } from "../../domain/adaptor/users.exists.user.id.adaptor";
import { UsersExistsUserIdInputDto } from "../../inbound/dtos/users.exists.user.id.input.dto";
import { UsersExistsUserIdOutputDto } from "../../outbound/dtos/users.exists.user.id.output.dto";
export declare class UsersExistsUserIdUseCase implements UsersExistsUserIdAdaptor {
    private readonly repository;
    constructor(repository: UsersExistsUserIdAdaptor);
    existsUserId(dto: UsersExistsUserIdInputDto): Promise<UsersExistsUserIdOutputDto>;
}
