import { UsersFindByIdAdaptorInputDto } from "../../../inbound/dtos/users.find.by.id.adaptor.input.dto";
import { UsersFindByIdAdaptorOutputDto } from "../../../outbound/dtos/users.find.by.id.adaptor.output.dto";
export interface UsersFindByIdInterface {
    readonly usersFindById: ({ id, }: UsersFindByIdAdaptorInputDto) => Promise<UsersFindByIdAdaptorOutputDto>;
}
