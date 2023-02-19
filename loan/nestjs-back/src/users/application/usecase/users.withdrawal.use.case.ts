import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { UsersWithdrawalAdaptor } from "../../domain/adaptor/users.withdrawal.adaptor";
import { UsersWithdrawalAdaptorInputDto } from "../../inbound/dtos/users.withdrawal.adaptor.input.dto";
import { UsersWithdrawalAdaptorOutputDto } from "../../outbound/dtos/users.withdrawal.adaptor.output.dto";
import { CONFIRM_REQUIRED_UNIQUE_ID_INFORMATION } from "../../../common/constants/http/errors/400";

@Injectable()
export class UsersWithdrawalUseCase implements UsersWithdrawalAdaptor {
  constructor(
    @Inject("WITHDRAWAL") private readonly repository: UsersWithdrawalAdaptor
  ) {}

  public async withdrawal(
    dto: UsersWithdrawalAdaptorInputDto
  ): Promise<UsersWithdrawalAdaptorOutputDto> {
    const { id } = dto;
    if (id === "")
      throw new BadRequestException(CONFIRM_REQUIRED_UNIQUE_ID_INFORMATION);

    return await this.repository.withdrawal(dto);
  }
}
