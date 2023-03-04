import { Inject, Injectable } from "@nestjs/common";
import { LoansUpdateAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.update.adaptor.output.dto";
import { LoansUpdateAdaptor } from "../../domain/adaptor/loans.update.adaptor";
import { LoansUpdateAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.update.adaptor.input.dto";

@Injectable()
export class LoansUpdateUseCase implements LoansUpdateAdaptor {
  constructor(
    @Inject("UPDATE") private readonly repository: LoansUpdateAdaptor
  ) {}

  public async update(
    dto: LoansUpdateAdaptorInputDto
  ): Promise<LoansUpdateAdaptorOutputDto> {
    return await this.repository.update(dto);
  }
}
