import { UsersProfileAdaptorOutputDto } from '../../outbound/dtos/users.profile.adaptor.output.dto';
import { UsersModel } from "../../domain/entity/users.model";
import { UsersProfileAdaptor } from "../../domain/adaptor/users.profile.adaptor";
export declare class UsersProfileUseCase implements UsersProfileAdaptor {
    private readonly repository;
    constructor(repository: UsersProfileAdaptor);
    profile(dto: UsersModel): Promise<UsersProfileAdaptorOutputDto>;
}
