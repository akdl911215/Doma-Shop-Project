import { UsersWithdrawalAdaptorInputDto } from "../../inbound/dtos/users.withdrawal.adaptor.input.dto";
import { UsersWithdrawalAdaptorOutputDto } from "../../outbound/dtos/users.withdrawal.adaptor.output.dto";

export interface UsersWithdrawalAdaptor {
  readonly withdrawal: (dto: UsersWithdrawalAdaptorInputDto) =>
    Promise<UsersWithdrawalAdaptorOutputDto>
}