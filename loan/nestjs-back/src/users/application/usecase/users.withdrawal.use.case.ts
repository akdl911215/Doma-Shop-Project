import { Inject, Injectable } from "@nestjs/common";
import { UsersWithdrawalAdaptor } from "../../domain/adaptor/users.withdrawal.adaptor";
import { UsersWithdrawalAdaptorInputDto } from "../../inbound/dtos/users.withdrawal.adaptor.input.dto";
import { UsersWithdrawalAdaptorOutputDto } from "../../outbound/dtos/users.withdrawal.adaptor.output.dto";

@Injectable()
export class UsersWithdrawalUseCase implements UsersWithdrawalAdaptor {
  constructor(
    @Inject('WITHDRAWAL') private readonly repository: UsersWithdrawalAdaptor,
  ) {}

  public async withdrawal(
    dto: UsersWithdrawalAdaptorInputDto,
  ): Promise<UsersWithdrawalAdaptorOutputDto> {
    return await this.repository.withdrawal(dto);
  }
}
