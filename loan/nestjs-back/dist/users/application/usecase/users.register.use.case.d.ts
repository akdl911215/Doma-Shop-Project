import { UsersRegisterAdaptorInputDto } from '../../inbound/dtos/users.register.adaptor.input.dto';
import { UsersRegisterAdaptorOutputDto } from '../../outbound/dtos/users.register.adaptor.output.dto';
import { UsersRegisterAdaptor } from "../../domain/adaptor/users.register.adaptor";
import { UsersExistsAdaptor } from "../../domain/adaptor/users.exists.adaptor";
export declare class UsersRegisterUseCase implements UsersRegisterAdaptor {
    private readonly userService;
    private readonly repository;
    constructor(userService: UsersExistsAdaptor, repository: UsersRegisterAdaptor);
    register(dto: UsersRegisterAdaptorInputDto): Promise<UsersRegisterAdaptorOutputDto>;
}
