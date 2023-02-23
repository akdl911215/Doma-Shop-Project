import { UsersFindByIdInterface } from "../../interface/users.find.by.id.interface";
import { UsersFindByIdAdaptorOutputDto } from "../../../../../users/outbound/dtos/users.find.by.id.adaptor.output.dto";
import { UsersFindByIdAdaptorInputDto } from "../../../../../users/inbound/dtos/users.find.by.id.adaptor.input.dto";
export declare class UsersFindByIdUseCase implements UsersFindByIdInterface {
    private readonly repository;
    constructor(repository: UsersFindByIdInterface);
    usersFindById({ id, }: UsersFindByIdAdaptorInputDto): Promise<UsersFindByIdAdaptorOutputDto>;
}
