import { UsersFindByIdAdaptorInputDto } from "../../../../users/inbound/dtos/users.find.by.id.adaptor.input.dto";
import { UsersFindByIdAdaptorOutputDto } from "../../../../users/outbound/dtos/users.find.by.id.adaptor.output.dto";

export interface UsersFindByIdInterface {
  readonly usersFindById: ({
    id,
  }: UsersFindByIdAdaptorInputDto) => Promise<UsersFindByIdAdaptorOutputDto>;
}
