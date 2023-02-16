import { UsersProfileAdaptorOutputDto } from "../../outbound/dtos/users.profile.adaptor.output.dto";
import { UsersProfileAdaptor } from "../../domain/adaptor/users.profile.adaptor";
import { UsersProfileAdaptorInputDto } from "../../inbound/dtos/users.profile.adaptor.input.dto";
export declare class UsersProfileUseCase implements UsersProfileAdaptor {
    private readonly repository;
    constructor(repository: UsersProfileAdaptor);
    profile(dto: UsersProfileAdaptorInputDto): Promise<UsersProfileAdaptorOutputDto>;
}
