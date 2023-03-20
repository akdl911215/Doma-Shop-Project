import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { UsersWithdrawalAdaptor } from "../../domain/adaptors/users.withdrawal.adaptor";
import { UsersWithdrawalAdaptorInputDto } from "../../inbound/dtos/users.withdrawal.adaptor.input.dto";
import { UsersWithdrawalAdaptorOutputDto } from "../../outbound/dtos/users.withdrawal.adaptor.output.dto";
import { UNIQUE_ID_REQUIRED } from "../../../_common/constants/http/errors/400";

@Injectable()
export class UsersWithdrawalUseCase implements UsersWithdrawalAdaptor {
  constructor(
    @Inject("WITHDRAWAL") private readonly repository: UsersWithdrawalAdaptor
  ) {}

  public async withdrawal(
    dto: UsersWithdrawalAdaptorInputDto
  ): Promise<UsersWithdrawalAdaptorOutputDto> {
    const { id } = dto;
    if (!id) throw new BadRequestException(UNIQUE_ID_REQUIRED);

    return await this.repository.withdrawal(dto);
  }
}
